+++
title = "Fooled by Randomness"
date = 2023-01-29
tags = ["book"]
draft = false
+++

## Own summary {#own-summary}

I must admit "[Fooled by Randomness](https://www.goodreads.com/book/show/38315.Fooled_by_Randomness)" was a hard to digest food for my brain. I
had the same feeling while I was reading [Thinking, Fast and Slow]({{< relref "thinking_fast_and_slow.md" >}}) by Daniel
Kahneman. What do these books have in common? They both deal with human
behavior, probability, stochastics, heuristics. These are concepts for which
humans don't necessarily have a born ability to understand and to deal with.

[Taleb](https://www.goodreads.com/author/show/21559.Nassim_Nicholas_Taleb) used to be a trader in the financial market before he got more into
mathematics and the science of economics. He spend some time analyzing traders
performance and to which degree randomness played a role whether chosen
investing strategies turned out to be successful or not. When someone is
successful in his/her field we tend to attribute certain skills and
professionalism to that person, where in fact a success story was rather just
luck.


### Skills or just luck? {#skills-or-just-luck}

_Just to give an example_: Let's take 10.000 managers and let them play a game:

-   Each one has a 50% chance of making 10k EUR per year or lose 10k EUR
-   Those that lose the 10k EUR are gone forever (and will be labeled as _looser_)

Let's have a look how this could look like:

-   Year #1
    -   Out of 10.000 managers, 5000 managers will **survive** and 5000 managers will lose their job
-   Year #2
    -   Out of 5000 managers, 2500 managers **survive** and 2500 lose their job
-   Year #3
    -   Out of 2500 managers, 1250 managers **survive** and 1250 lose their job
-   Year #4
    -   Out of 1250 managers, 625 managers **survive** and 625 lose their job
-   Year #5
    -   Out of 625 managers, 313 managers **survive** and 313 lose their job

**Out of the initial 10.000 managers, only 313 managed to survive and win 10k EUR per year**.
Instead of say saying this group only survived purely out of luck, we tend to attribute
them "high-level skills of fund managing".


### Black swans {#black-swans}

When things go well, people use to say their decisions were the right ones. Especially
when dealing with future predictions (if certain events will take place, how economic
metrics will evolve) investors tend to _rely on empirical evidence_ assuming that past
events might be a relevant sample of what the future will look like. This empirical
science is called induction and relates to the observations we make from which we then
conclude things. Also known as the **black swan problem**, [John Stuart Mill](https://en.wikipedia.org/wiki/Black_swan_theory) put it this way:

> No amount of observations of white swans can allow the inference that all swans are white,
> but **the observation of a single black swan** is **sufficient** to **refute that conclusion**

What do we learn from _black swans_? Always consider your choices and assumptions
<span class="underline">today</span> to be proved wrong some <span class="underline">other day</span>. Don't (completely) ignore the "black
swan" event as we can never be sure any theory is right. Things will evolve and
thus change.

How can one survive in today's "attention dragging" environment? How can we deal
with the information influx and constantly reassess our predictions and
assumptions? In our interaction with the outside world, our brain has developed
strategies how to make _quick_ decisions when needed.
{{% sidenote %}}
Daniel Kahneman distinguishes between System 1 and System 2 in [his book]({{< relref "thinking_fast_and_slow.md" >}}).
{{% /sidenote %}} We have developed _heuristics_, some sort of shortcuts which lead to **biases**. There
is _confirmation_ bias, _attribution_ bias, _hindsight_ bias and lots more . All these
influence our perception and the way we think We might always find patterns and
explanations for past events, but these are mostly useless for future events.

Sometimes you have this kind of events which you might consider _rare_ to actually
take place. These _rare_ events exist because they are _unexpected_ and mostly
because we cannot have **all** information at our hands before taking a decision.
{{% sidenote %}}
One of Stochastics main idea is that the more information we have, the more we can
predict a certain result/event. Also see [Law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers).
{{% /sidenote %}}


### Asymmetric outcomes {#asymmetric-outcomes}

Again, we have following example: Imagine you play a game where you have a
999/1000 chance of _winning_ 1 EUR and a 1/1000 chance of losing 10k EUR. Before
playing the game, it's our human behaviour to make decisions on things "that are
**likely** to happen". But in this case this would be a mistake as the **expected**
outcome is _negative_ (probability is **NOT** expectation). Why? Let's do the math:

-   There is a 999/1000 = 0.999 chance of _winning_ 1 EUR
    -   The **expectation** is 0.999 \* 1 EUR = 0.999 EUR
-   There is a 1/1000 = 0.0001 chance of _losing_ 10k EUR
    -   The **expectation** is 0.0001 \* 10.000 EUR = -10 EUR
    -   So each round you **lose** 10 EUR

We sum up the **expectations** we have: -10 EUR + 0.999 EUR = -9.001 EUR.
So the expectation at this game is that you lose. Lots of money.


### Probability blindness {#probability-blindness}

Multiple doctors were asked to read following test description and answer the
question. As you imagine, most of them failed to give the right answer.
{{% sidenote %}}
This example is taken from [Randomness](https://www.goodreads.com/en/book/show/1445847) (by Deborah Bennett): She refers to this
problem as the "base-rate misconception"
{{% /sidenote %}}
-   If a test to detect a disease whose prevalence is one in a thousand has a
    false positive rate of 5%, what is the chance that a person found to have a
    positive result actually has the disease, assuming you know nothing about the
    person’s symptoms or signs?

So 1 of 1000 people is affected by this disease. The test has a false positive
rate of 5%. If someone is tested and the result is positive, how likely is it
that this person is really <span class="underline">infected</span>? Most people would answer 95% (since the
test has a false positive rate of 5%). But this is wrong and mainly because it's
a _conditional probability_.

Here is the explanation:

-   The disease affects 1 of 1000 people
    -   This means that 999 persons are not infected and just 1 is affected
-   Assuming the test has no false negatives
    -   Anyone who actually _has the disease gets a positive result_
    -   This means 1 out of 1000 tests are true positives
    -   The _remaining_ 999 should be negative results, but the 5% false positive rate means
        -   5% \* 999 ~= 50 Persons will receive a false positive result
        -   per total we have 50 + 1 = 51 persons with a positive result

Now, among the persons with a positive result, who likely is it that these
persons are also affected by the disease? To calculate this we need following
(division):

```text
number of affected persons /
number of positive test results (incl. false positive)
```

In this case this is `1 / 50` which is 2%! So there is a chance of only 2% to be really
affected by the disease.


### Conclusion {#conclusion}

Somewhere in the middle of the book I've felt like I need to give up reading
because I was somewhere lost between the termini from different areas. But I
struggled through the entire book and now I'm happy I could at least extract
some main points that sticked to my mind.
{{% sidenote %}}
I've found [Monte Carlo simulations](https://www.youtube.com/watch?v=7ESK5SaP-bc&ab_channel=MarbleScience) to be also quite interesting.
{{% /sidenote %}} To summarize what I've already mentioned in this post: We are all at some point
fooled by randomness but we don't give that much attention to it and often
misinterpret outcomes as something deterministic or related to whatsoever
skills.


## Notes (in Romanian) {#notes--in-romanian}


### Coup de foudre {#coup-de-foudre}

> In ziua aceea, Nero Tulip a fost lovit de ceea ce francezii numesc un coup de
> foudre, o pasiune bruscă (şi obsesivă), care te lovește ca fulgerul. ,,Asta e
> făcută pentru mine!" a tipat entuziast - nu a putut să nu compare existența unui
> trader cu celelalte alternative pe care viața i le oferea


### Taur si urs {#taur-si-urs}

> Termenii taur şi urs sunt folosiți pe piețele financiare pentru a descrie două
> tipuri de investitori, aflați la extreme: taurii sunt optimiştii, care investesc
> în susținerea unei acțiuni, mizând pe un profit așteptat din partea ei, în vreme
> ce urşii sunt pesimişti, considerând că o acțiune se va deprecia, neinvestind
> astfel în ea.


### Deviatie restrospectiva {#deviatie-restrospectiva}

> în Capitolul 11, dar iată aici o posibilă explicație: minţile noastre nu sunt
> tocmai programate să înțeleagă cum funcționează lumea, ci, mai degrabă, să scape
> din belea și să aibă urmaşi. Dacă ar fi făcute să priceapă lucrurile, atunci am
> avea o maşinărie înăuntrul lor, care ar derula istoria trecută ca într-un aparat
> video, cu cronologie exactă, și ne-ar încetini atât de mult, încât am avea
> probleme de funcționare. Psihologii numesc această supraestimare a lucrurilor pe
> care cineva le ştia în momentul evenimentului, datorită informațiilor
> ulterioare, deviație retrospectivă, efectul ,,Am ştiut din prima".


### Cygnus atratus {#cygnus-atratus}

> In Treative on Human Nature, filozoful scoțian David Hume a pus problema în
> felul următor (aşa cum a fost ea reformulată de John Stuart Mill în cadrul acum
> faimoasei probleme a Lebedei Negre (black swan)): Niciun număr de observații
> asupra existenţei lebedelor albe nu poate permite inferența că toate lebedele
> sunt albe, căci observarea unei singure lebede negre este suficientă pentru a
> desființa această concluzie.


### Euristici (heuristics) {#euristici--heuristics}


#### Euristica disponibilitatii {#euristica-disponibilitatii}

> (1) Euristica disponibilității, pe care am întâlnit-o în Capitolul 3, când
> cutremurul din California a fost declarat mult mai babil decât o catastrofă la
> nivelul întregii țări, sau când moartea cauzată de terorism a fost mult mai
> probabilă" decât moartea rezultată din toate celelalte surse (inclusiv
> terorism). Corespunde obiceiului de a estima frecvența unui eveniment în funcție
> de uşurinţa cu care circumstanțele evenimentului pot fi amintite.


#### Euristica reprezentativitatii {#euristica-reprezentativitatii}

> (2) Euristica reprezentativității:
>
> estimarea probabilității ca o persoană să aparțină unui anumit grup social
> apreciind cât de similare sunt caracteristicile 292 persoanei cu cele ale
> membrilor ,,reprezentativi" pentru grup. O studentă la filozofie, genul
> feminist, este mult mai probabil să fie luată drept casieră feministă de bancă
> decât doar casieră de bancă. Problema este cunoscută sub numele de ,,problema
> Linda" (numele feministei era Linda) şi a făcut să curgă multă cerneală
> academică (câțiva dintre oamenii implicați în „dezbaterea raționalistă" cred că
> Kahneman și Tversky au cerințe normative înalte de la noi, oamenii).


#### Euristica simularii {#euristica-simularii}

> (3) Euristica simulării: uşurinţa de a demonta mental un eveniment - de a juca
> scenariul alternativ. Corespunde gândirii contrafactuale: imaginează-ți ce s-ar
> fi putut întâmpla dacă nu ai fi pierdut trenul (sau cât de bogat ai fi fost
> astăzi dacă ti-ai fi lichidat portofoliul la apogeul bulei NASDAQ).


#### Euristica afectului {#euristica-afectului}

> (4) Am discutat în Capitolul 3 euristica afectului: Ce emoții îți declanşează un
> eveniment determină în mintea ta probabilitatea lor


### Eroarea lui Descartes {#eroarea-lui-descartes}

> Eroarea lui Descartes prezintă o teză foarte simplă: efectuezi o ablație
> chirurgicală a unei bucăți din creierul unei persoane (ca să elimini, de
> exemplu, o tumoare și țesutul din jurul ei), rezultând ca unic efect
> inabilitatea de a înregistra emoții, nimic altceva (coeficientul de inteligență
> și celelalte facultăți rămân la fel). Ai efectuat un experiment controlat de
> separare a emoțiilor de inteligența cuiva. Acum, ai o fiinţă umană perfect
> rațională, neîmpovărată de sentimente şi emoţii. Să vedem: Damasio a raportat că
> individul complet neemoțional era incapabil să ia chiar şi cea mai simplă
> decizie. Şoc! Acest lucru contravine oricăror așteptări: nu putem lua decizii
> fără emoții.
