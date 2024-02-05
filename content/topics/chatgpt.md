+++
title = "ChatGPT"
author = ["Victor Dorneanu"]
draft = false
+++

## Resources {#resources}


### Clients {#clients}

-   2023-03-22 ◦ [GitHub - xenodium/chatgpt-shell](https://github.com/xenodium/chatgpt-shell) ([Emacs]({{< relref "emacs.md" >}}))
-   2023-01-18 ◦ [GitHub - joshcho/ChatGPT.el: ChatGPT in Emacs](https://github.com/joshcho/ChatGPT.el) ([Emacs]({{< relref "emacs.md" >}}))


### Use cases {#use-cases}

-   2023-07-05 ◦ [Top 7 ChatGPT Developer Hacks - YouTube](https://www.youtube.com/watch?v=9W_U1y7RYuE)
-   2023-06-06 ◦ [GPT Best Practices](https://platform.openai.com/docs/guides/gpt-best-practices)
-   2023-05-10 ◦ [Summarizing URLs with ChatGPT](https://willschenk.com/howto/2023/summarizing_urls_with_chatgpt/)
-   2023-04-03 ◦ [Plato](https://platoeducation.ai/#/notes/)
-   2023-01-19 ◦ [GPT-3 Is the Best Journal I've Ever Used](https://every.to/superorganizers/gpt-3-is-the-best-journal-you-ve-ever-used)
-   2023-01-18 ◦ [How AI will replace my job – INNOQ](https://www.innoq.com/en/blog/how-ai-will-replace-my-job/)


### Security {#security}

-   2024-02-01 ◦ [StrideGPT](https://stridegpt.streamlit.app/)
-   2023-08-21 ◦ [Don’t you (forget NLP): Prompt injection with control characters in ChatGPT - Dropbox](https://dropbox.tech/machine-learning/prompt-injection-with-control-characters-openai-chatgpt-llm)


### System Prompts {#system-prompts}

-   2024-01-31 ◦ [ChatGPT Prompt Builder](https://mitenmit.github.io/gpt/)
-   2023-10-25 ◦ [ChatGPT / GPT-4 System Prompt Engineering - Ultimate Guide - YouTube](https://www.youtube.com/watch?v=zNACfPuaqaI&ab_channel=AllAboutAI)
-   2023-10-24 ◦ [GitHub - spdustin/ChatGPT-AutoExpert: 🚀🧠💬 Supercharged Custom Instructions for ChatGPT (non-coding) and ChatGPT Advanced Data Analysis (coding)](https://github.com/spdustin/ChatGPT-AutoExpert)
-   2023-10-24 ◦ [GitHub - mustvlad/ChatGPT-System-Prompts: This repository contains a collection of the best system prompts for ChatGPT](https://github.com/mustvlad/ChatGPT-System-Prompts)


### Alternatives {#alternatives}

-   2023-05-17 ◦ [Github Copilot and ChatGPT alternatives - The Pragmatic Engineer](https://blog.pragmaticengineer.com/github-copilot-alternatives/)

    > – OpenAI APIs. Curiously, ChatGPT uses data entered via its web interface for
    >   training, but not when using its APIs. So an obvious workaround is to use the APIs
    >   with a wrapper, like the open source Chatbot UI.
    > – Azure OpenAI Service. Fine-tune custom AI models with your company data and
    >   hyperparameters.
    > – MosaicML. Train large AI models with your company data in a secure environment.
    >   Point to an AWS S3 bucket, and that’s it!
    > – Glean. AI-powered workplace search across the company’s apps, powered by deep
    >   learning-based large language models (LLM.)
    > – Aleph Alpha. A company emphasizing that it’s a European AI technology company,
    >   which has open sourced its code codebase and doesn’t use customer data to train
    >   models.
    > – Cohere. A set of LLMs to generate text, summarize it, classify and retrieve it.
    > – Writer. A generative AI platform that trains on the company’s data.


### For learning {#for-learning}

-   2023-05-03 ◦ [10 Ways You Can Use ChatGPT to Learn Better - Scott H Young](https://www.scotthyoung.com/blog/2023/05/02/chatgpt-learning-tips/)


### How does it work {#how-does-it-work}

-   2023-05-08 ◦ [How ChatGPT Works Technically | ChatGPT Architecture - YouTube](https://www.youtube.com/watch?v=bSvTVREwSNw&ab_channel=ByteByteGo)
-   2023-05-08 ◦ [Ep. 244: Cal Newport’s Thoughts on ChatGPT - YouTube](https://www.youtube.com/watch?v=OVm2IoUUxdo)
    -   Idea #1: Word guessing

        > [15:30] - [16:01]:
        > sentence the quick brown fox jumped over the we would put that as input into the
        > model it would spit out the next word this approach which is known as **Auto regressive
        > text generation is what the models underneath all of these new generation chat Bots
        > like chat gbt actually use** they guess one word at a time that word is added to the
        > text and the newly expanded text is put through the model to get the next word so it
        > just generates one word at a time so if you
    -   Idea #2: Relevant Word Matching

        > [17:00] - [17:30]:
        > well at its core what's really happening here and I'm simplifying but at its core
        > what's really happening here is the model is just looking at the most relevant words
        > from the input it is then going to match those relevant words to actual text that
        > it's been given we call these Source text in my article so examples of real text it
        > can match the relevant words to where they show up in real text and say what follows
        > these relevant words in real text
    -   Idea #3: Voting

        > [19:01] - [19:30]:
        > happens we want to be a little bit more probabilistic so what I I would say a closer
        > way of describing what happens is we can imagine that our large language model is
        > going to look for every instance every instance of the relevant words that we're
        > looking for and it's going to see what follows those instances and keep track of it
        > what are all the different words that follow in this example fox jumped over
        >
        > [19:30] - [20:00]:
        > and every time it finds an example a fox jumped over it says **what word follows next
        > let's give a vote for that word and so if the same word follows in most of the
        > examples** it's going to get most of the votes now I'm using votes here sort of as a
        > metaphor what we're really doing here is trying to build a normalized probability
        > distribution so in the end what we're going to get what the what the large language
        > model is going to produce is for every possible next word it is going to produce a
        > probability what is the probability that this should
    -   Idea #4: Feature Detection

        > [25:01] - [25:33]:
        > want a chat bot we can't just have our program generate believable text the text have
        > to actually answer the question being asked by the user so how do we aim this
        > automatic text generation mechanism towards specific types of answers that match what
        > the user is asking well this brings in the notion of feature detection which is the
        > fourth out of the five total ideas I want to go over today so what happens with
        > feature detection is a response you know so we have a a

        <!--quoteend-->

        > [29:01] - [29:32]:
        > the source text to figure out it's relevant and very specific guidelines about how
        > should we then change our votes for words that match Source text that match these
        > properties of these complicated rules if we have enough of these rules then we can
        > start to generate text that's not only natural sounding but actually seems to reply
        > to or match what is being requested by the user now **I think the reason why people
        > have a hard time grasping this step is they imagine how**
        >
        > [29:32] - [30:01]:
        > many rules of them or them and a team of people could come up with and they say I I
        > could come up with a couple dozen maybe if I worked with a team for a couple years we
        > could come up with like a thousand good rules but these rules are complicated even a
        > rule as simple as how do we know they're asking about VCR instructions and how do we
        > figure out if a given text we're given is a VCR instruction text I don't know I'd
        > have to really think about that look at a lot of examples **I mean if we worked really
        > hard we could produce a few hundred maybe a thousand of these rules and that's not
        > going to be nearly enough that's not going to**

        <!--quoteend-->

        > [30:01] - [30:30]:
        > cover nearly enough scenarios for the all of the topics that the more than one
        > million users who've signed up for chat CPT for example all the topics they could ask
        > about it turns out that the number of rules you really need to be as Adept as chat
        > PBT just blows out of proportion any scale any human scale we can think of you know I
        > did a little bit of back of envelope math for my New Yorker article if you took all
        > of the parameters that
        >
        > [30:30] - [31:01]:
        > Define gpt3 which is the the large language model that chat CPT then refined and is
        > based on so the parameters we can think of as the things they actually changed
        > actually train so this is really like **the description of all of its rules if we just
        > wrote out all of the numbers that Define the gpt3 we would fill over 1.5 million
        > average length books so the number of rules you would have to have if we were writing
        > them out would fill a large University Library full of**
        >
        > [31:01] - [31:31]:
        > **rules that scale is so big we have a really hard time imagining it** and that's why
        > when we start to see um oh my goodness this thing can answer almost anything I send
        > to it can answer almost any question I I Ask of it we think there must be some uh
        > adaptable intelligence in there that it's just learning about things trying to
        > understand and interact with us because we couldn't imagine just having enough wrote
        > rules to handle every topic that we could ask but there is a lot of rules there's 1.5
        >
        > [31:31] - [32:00]:
        > million books full of rules inside the stat GPT and **so you have to wrap your mind
        > around that scale and then you have to imagine that not only is that many rules but
        > we can apply them in all sorts of combinations** VCR instructions but also about a
        > peanut butter sandwich also in the style of King James Bible stack those three rules
        > and we get that first example that we saw earlier on all right so then the final idea
        > is how in the world are we going to come up with all those rules 1.5 million books
        > full of rules how are we going to do

    -   Idea #5: Self-Training

        > [35:31] - [36:01]:
        > there's one estimate I found online\* that said training chat GPT on a a single
        > processor would take over 350 years of compute time and the only way that they could
        > actually train on so much data so long was to have many many processors working in
        > parallel spending well over a million dollars\* I'm sure with a compute time just to
        > get this training done and it still probably took weeks if not months to actually
        > complete that process but here's the leap of faith I want you to make after this
        > final idea if you do this training the simple training
        >
        > [36:01] - [36:30]:
        > process on enough passages drawn from enough Source text covering enough different
        > types of topics from VCR instructions to Seinfeld Scripts these rules through all of
        > these nudging these 1.5 million books worth of rules will eventually become really
        > really smart and it'll eventually be way more comprehensive and nuanced than any one
        > team of humans could ever produce and they're going to recognize that this is a Bible
        > verse you want VCR instructions here and bubble sort is an algorithm and
