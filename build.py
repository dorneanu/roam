#!/usr/bin/env python

import glob
from pathlib import Path

# files = glob.glob("org/books/done/*.org") + glob.glob("org/topics/*.org") + glob.glob("org/journal/*.org")

with open('build.ninja', 'w') as ninja_file:
    ninja_file.write("""
rule org2md
  command = ~/.local/opt/emacs/bin/emacs --batch -u victor -l ~/.config/emacs/lisp/doom-start.el -l ~/.doom.d/init.el -l publish.el --eval '(brainfck/publish "$in")'
  # command = emacs --batch -u victor -l ~/.emacs.d/lisp/doom-start.el -l ~/.doom.d/init.el -l publish.el --eval '(brainfck/publish "$in")'
  description = org2md $in
""")

    # Pages
    files = glob.glob("org/*.org")
    for f in files:
        path = Path(f)
        output_file = f"content/pages/{path.with_suffix('.md').name}"
        ninja_file.write(f"""
build {output_file}: org2md {path}
""")

    # Books
    files = glob.glob("org/books/done/*.org")
    for f in files:
        path = Path(f)
        output_file = f"content/books/{path.with_suffix('.md').name}"
        ninja_file.write(f"""
build {output_file}: org2md {path}
""")

    # Journal
    files = glob.glob("org/journal/*.org")
    for f in files:
        path = Path(f)
        output_file = f"content/journal/{path.with_suffix('.md').name}"
        ninja_file.write(f"""
build {output_file}: org2md {path}
""")

    # Topics
    files = glob.glob("org/topics/*.org")
    for f in files:
        path = Path(f)
        output_file = f"content/topics/{path.with_suffix('.md').name}"
        ninja_file.write(f"""
build {output_file}: org2md {path}
""")



import subprocess
subprocess.call(["ninja"])
