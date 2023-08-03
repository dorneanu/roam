+++
title = "Implement a plugin architecture in Python"
draft = false
+++

Implementing a basic plugin architecture shouldn't be a complicated task. The solution described [here](https://stackoverflow.com/questions/5189232/how-to-auto-register-a-class-when-its-defined/50099920#50099920) is working but you still have to `import` every plugin (inheriting from the base class). This is my solution:

-   basic project structure

<div class="html">

&lt;!-- --&gt;

</div>

```text
$ tree
.
├── main.py
└── plugins
    ├── __init__.py
    ├── plugin_a.py
    ├── plugin_b.py
```

-   the base plugin

<div class="html">

&lt;!-- --&gt;

</div>

```text
$ cat plugins/__init__.py

import os
import traceback
from importlib import util


class Base:
    """Basic resource class. Concrete resources will inherit from this one
    """
    plugins = []

    # For every class that inherits from the current,
    # the class name will be added to plugins
    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        cls.plugins.append(cls)


# Small utility to automatically load modules
def load_module(path):
    name = os.path.split(path)[-1]
    spec = util.spec_from_file_location(name, path)
    module = util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


# Get current path
path = os.path.abspath(__file__)
dirpath = os.path.dirname(path)

for fname in os.listdir(dirpath):
    # Load only "real modules"
    if not fname.startswith('.') and \
       not fname.startswith('__') and fname.endswith('.py'):
        try:
            load_module(os.path.join(dirpath, fname))
        except Exception:
            traceback.print_exc()
```

-   a sample plugin

<div class="html">

&lt;!-- --&gt;

</div>

```text
$ cat plugins/plugin_a.py
import plugins


class PluginA(plugins.Base):

    def __init__(self):
        pass

    def start(self):
        print("Plugin A")
```

And now the `main.py`:

```text
$ cat main.py
from plugins import Base

if __name__ == '__main__':
    for p in Base.plugins:
        inst = p()
        inst.start()
```
