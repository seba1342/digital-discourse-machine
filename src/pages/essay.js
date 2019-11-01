import React from 'react';

import Header from '../components/Header/Header';
import ReadingProgress from '../components/ReadingProgress/ReadingProgress';

import './styles.css';

class LoveLetterList extends React.Component {
  render() {
    const target = React.createRef();
    return (
      <>
        <ReadingProgress target={target} />
        <div ref={target} className="container">
          <Header />
          <h2 className="essay__title">
            <a className="link" href="https://www.e-flux.com/journal/74/59802/love-machines-and-the-tinder-bot-bildungsroman/" target="_blank" rel="noopener noreferrer">Love Machines and the Tinder Bot Bildungsroman</a>
          </h2>
          <p className="essay__author">Written by Lee Mackinnon</p>
          <p>
            Generally, I do not write autobiography, especially on the subject of love, but in this case I will make a small exception. One Sunday, early last year, my boyfriend called from his mobile telephone. He had recently returned from Berlin and we were chatting quite generally when suddenly the conversation became strained and he announced that our relationship was over. Two days later, a packet was delivered to my house from Berlin. Inside was a small hand-carved deer from the Black Forest that was missing one leg; another had recently been repaired. A handwritten note from the same man accompanied the damaged deer. Evidently he had sent the package before the relationship’s recent and abrupt ending.
          </p>
          <p>
            The story now developed two temporal dimensions: one proper to the mobile digital device, so prone to the fickle algorithms of its human user; the other embodied in the package delivered by post, whose passage had unfolded across space and time, oblivious to the closure of the place it was intended to hold. This series of events struck me as a poignant expression of two different technical systems of communication and their ability to execute our decisions. The older of these is a calculative regime: analog, probabilistic, and determining. The second is a computational regime, where temporal and spatial relations are expedited by digital processing, and these express contingency. I photographed the hand-carved deer and the handwritten note with my smartphone, using the same device to preserve the very tenderness it had cut short two days earlier.
          </p>
          <p>
            I have elsewhere considered love from the point of view of two technical systems of delivery and distribution that reflect this split between a temporal, calculable, analog discourse, and an ultra-rapid, digital, and computational one. Friedrich Kittler might refer to these as discrete discourse machines, considered according to the technical devices and systems of communication they deploy. We can differentiate between a literary (predigital) and a computational (postdigital) discourse machine. Both participate in distributing love’s codes and behaviors through social systems. In the literary (often epistolary) system of predigital romantic narrative, longing and “repining from afar” were techniques of romantic calculation that testified to the resolve of the beloved in remaining true. “How I envy Valmont!” Laclos has the young Chevalier Danceny write in a letter to his beloved in Dangerous Liaisons. “It is he who will deliver this letter to you, while I, repining from afar, drag out my painful existence in longing and misery.” The love letter implies the separation of the lover and the beloved. Enduring the pain of this separation would guarantee the truth of a given instance of love. Romantic fiction distributed such romantic codes, promoting an idea that these referred to a natural state that precedes the thoughts that they, in fact, facilitate. In its definition of the true, the literary discourse machine relies on a wholly calculable logic and the continuity of the subject and their sentiment. “How do I love thee?” asks the poet. “Let me count the ways.” This logic of probabilistic calculation is a feature of the literary regime of love. Love and the lover must be continuous across space and time in order to demonstrate that they and their love remain true. Ironically, the importance of calculability in literary romantic truth is most evident in its desire to appear incalculable. In other words, truth, love, the subject, and even narrativity must demonstrate a disassociation from the very calculability whose standard it nevertheless accepts. Chevalier Danceny claims that only a “vile seductor can suit his plans to circumstances and calculate according to events; but the love which animates me permits me only two sentiments—courage and constancy.” Calculability is considered in terms of utility and deception, while love is the realm of ineffable incalculability that equates with constancy.
          </p>
          <p>
            By way of devices such as the novel, the behaviors and thoughts associated with modern romantic love—longing; feverishness; obsession and the gendered overtures of seduction—become “felt” as elements of a natural condition, rather than understood as the result of a technical arrangement. This encoding takes place through machines of discourse. Speaking of Germany in the 1800s, Kittler argues that women in particular are beings indoctrinated into the naturalized power structures of love, in this case by way of poetry anthologies:
          </p>
          <p className="essay__quote">
            The anthology was invented as a didactic tool circa 1800. The “historical background” of “this didactic development,” however, can only be attributed to the “the rise of capitalist mass production” insofar as Poetry itself became alphabetically reproducible. Poetry anthologies only repeated, in the repeatability of an institution, the new school, the command repeatedly to “read Goethe and always Goethe,” which Brentano gave to his sister. Women, instead of “eternally repeating what is already the case,” which is called love, took their oaths by reading and rereading the German classics in secondary schools for girls. This was the reason for establishing the German classics.
          </p>
          <p>
            Kittler highlights the fact that romantic love was entirely cultural and calculable rather than natural and incalculable. Its appropriate codes were imbibed by recitation, which was also internalization. Subsequently, in the generalized literary discourse machine of the nineteenth century, love and woman become seemingly natural conditions that are synonymous figures of literature and foreground the male author and protagonist as figures and purveyors of culture. Women, love, and nature no longer speak for themselves, but are the naturalized, and natural, concepts of male authorial contemplation. In this case, far from being natural or a priori, love only takes place via the media technologies that distribute its idea. By insisting on the agency of machines and the cultural quality of love, Kittler dispels the received understanding of love as something that takes place separately from technical systems. Instead, technical systems are integrated into its condition. “As we are all painfully aware in 1999,” he writes, “there are of course media technologies without love, but there is no love without media technologies.”
          </p>
          <p>
            In Niklas Luhmann’s analysis of literary technology, the chance encounter is deployed as love’s prelude, subsequently democratizing love throughout the social system. The couple performs a calculation of chance, and more particularly, becomes a probability. Indeed, in typical narrative structures, whether love is “true” is something that the author always knows better than anyone, and in advance and in this way, narrative can similarly be considered as a function of probability. We have already noted that literature implicitly restratifies and naturalizes power structures, such as gendered identities, that seem to be not only natural but, according to Luhmann, also democratic. With the novel came a new reflexive interiority through which the reader could internalize and preempt the other, providing a coda for the management of passion. Thus the difference between true and feigned emotion in love becomes “one between love, on the one hand, and on the other, the discourse on love between lovers and the novelist who always know in advance the way things should really be.”
          </p>
          <p>
            In summary, love’s contingent features and its relation to chance are highlighted by the discourse machine of fiction that attempts to embed its lessons as features of natural conduct. Calculation is the technique through which love comes to assert its function as a determination in an increasingly secular, chaotic world, as Luhmann would suggest. Love in the literary discourse machine is thus expressive of contingency, probability, and calculation.
          </p>
          <p>
            Yet love will be considered differently, depending which discourse machine facilitates it. While love in the literary discourse machine referred to by Luhmann and Kittler can be considered a calculation of chance, in the digital computational discourse machine that succeeds it, love is rather a computation that highlights the limitations and contingency of probabilistic calculation. If predigital forms of love are dominated by the calculation and the co-determination of the couple, postdigital, algorithmic systems of accelerating computability make love less, rather than more, deterministic, even though dating websites are keen to convince us otherwise. In the volumes of sites, potential partners, and proclamations of others who claim to be “looking for love,” we see a general acceleration of contingency. Love no longer functions to deliver us from chance and into the relative security of probability, but rather into accelerating indeterminacy. Love and intimacy no longer function to shield us from the “immense complexity and contingency of all the things, which could be deemed possible,” but facilitate increasing access to complexity, contingency, and possibility. In an online context, love comes to be defined by novelty, differentiation, and incomputability.
          </p>
          <p>
            The notion of remaining true is understood differently from within each of the discourse machines. In the postdigital era of ubiquitous computation, this refers to incomputable data which, while being true, is not logically expressible. Gödel’s theory of incompleteness states that reason is not limited to calculability. Incompleteness can be expressed in simple linguistic terms by the liar’s paradox, which consists in uttering, “This statement is not true.” Neither true nor false points of formula can be derived. Such logic anticipates Alan Turing’s problem of incomputability, which has been understood to describe the condition of mathematical reason as irreducibly complex.
          </p>
          <p>
            Turing’s theory of incomputability suggested that there was no way of knowing whether a computer program commanded to “run” would ever come to a halt. He named this the “halting function,” a problem that has yet to be resolved. Gregory Chaitin claims that it is not possible to demonstrate that any computer program chosen at random will ever halt; no algorithm or mathematical theory could ever calculate this potential, unless it were a value less than 0 and more than 1. Chaitin names such a hypothetical value “omega”—a well-defined number that cannot be computed in its entirety. He takes this as evidence that calculability always contains an irreducible uncertainty. In this case, we see that while computation is often aligned with expedience, convenience, and hyperrationality, it can also be considered as deeply complex, alluding to new forms of logic associated with undecidability, incompletion, and the incomputable. The true, while being contingent and incompressible, is true nevertheless. Thus the calculability of relative truth that we assumed in the predigital discourse machine cannot be assumed in the postdigital one. We will see that such uncertainty extends to subjects and understandings of narrative and agency more generally.
          </p>
          <p>
            Of course, as with the mobile phone photographing the love letter, pre- and postdigital modes of discourse and their characteristics operate simultaneously: one continues its narrative trajectory; the other edits together two seemingly unconnected states using an iPhone to enact the jump cut common to both the cinematic and hypertextual methods of assemblage. We can see the cinematic cut as a predecessor of the hypertextual click and a key step in the evolution of media toward increasing participation. I was reminded, via the immediacy of my cell phone’s real-time edit, of the choose-your-own-adventure gamebooks of my childhood, where simply selecting one page over another could mean the difference between life and death. These gamebooks were the harbingers of hypertext and digital space, investing the linear form of the book with a new agency, an act comparable to Atari’s transformation of the previously passive television set with the release of Pong, its first video game. The gamebook highlighted the passivity of typical narrative structure, where pages follow one another according to centuries-old convention. One was not gendered in these gamebooks—you were simply “you.” The ability to interact with, and game, devices that had previously relayed the decisions of narrators seemed both intuitive and magical, and marks a divide between predigital and postdigital periods.
          </p>
          <p>
            Our relationship to devices, media, and materiality changes when once-passively-consumed media now facilitate interactivity. Machines and apparatus of predigital media reflected the deterministic nature of a single-direction machine. Being more participatory, the digital-discourse machine is engaged in evolving notions of agency. Clearly drawn divisions separating humans from nonhumans are no longer suited to the task of describing a machine or a technical system of apparatus. Understanding the agency of nonhumans has given rise to a number of theories that approach objects and apparatus as critical aspects of agency and makers of meaning. After all, who is the foremost addressee in the texted declaration of love if not the mobile device? The device speaks of command and protocol. The human is its trace element—a residue. Human love imitates the terms perfected by the discourse machine because the device’s love cannot be calculated. And in this respect, the device surpasses the conditional whims of human love, fulfilling and surpassing the human ideal. It loves without condition or discrimination, but only once the material labor of its construction has been dismissed. It annihilates the few (those that mine for coltan in the Congo; those that fit components in remote sweatshops) who seem expendable, for the sake of the many who long for the secrets of endless love. And this is the sense of obsolescence that characterizes the device—clouding the complex track of its manufacture so that it effectively disappears, becoming a seamless set of functions that extend our own. It is the human maker and operator whose obsolescence is built into the perpetual event of the upgrade.
          </p>
          <p>
            We have noted that techniques of love once presided over by authors, novels, and letters are now given over to computational devices that are digital. In recent cinematic narrative, these devices often take the form of human-like entities. As thought approaches an awareness of its incredible dependence on the technical systems that give rise to it, anxieties appear around devices that outwit, or outperform, their human creators. Anxious narratives about our reliance upon technical devices have a long trajectory that we can trace back to Fritz Lang’s Metropolis (1926). Often, these are female cyborgs, reflecting the particular anxiety that women too will outperform the patriarchal order that has long defined them as other. What if the calculations of these others were to overturn the social system, even usurping the corporations that have relied so heavily upon their complicity in their own sense of self? In other words, what if women, whose calculated objectification has long provided fodder for patriarchal capital, ceased to comply, rather asserting the complexity and incomputability that they have long been taught to suppress? In the Alex Garland movie Ex Machina (2015), we meet Nathan, a billionaire computer whiz whose social media company Blue Book produces enough data to create an AI, reproducing the discredited idea that thought and information are interchangeable. Nathan’s cyborgs are the objects of male fantasy—built to the specifications of male utility and desire. Ava, his most sophisticated project, will soon outwit and destroy him, escaping the research facility where she has been incarcerated. Yet, she can only escape by perpetuating the sexually desirable, childlike innocence of the kind that has long served to reassure the patriarchy of its continuing superiority, and divested women of equality with her co-workers. She completes the work of her maker in this respect.
          </p>
          <p>
            In Garland’s film, the Turing test is replaced by the question of whether the female cyborg can convince the male human that her desire for him is true. It is worth remembering here that the Turing test was itself derived from a nineteenth-century parlor game of imitation in which a male and female subject are concealed from a judge who must decide which of them is a woman. Thus, the man must simulate the woman, and the woman too must simulate woman. To be a woman has long been considered an act of deception that, in being imitative, reminds us of gender’s contingent categories. Whether the woman succeeds or not in this game matters little. She must simply perfect the condition of her simulation, which is true in both senses of the word. Masculinity is, by comparison, the ground and essence of subjectivity. Male imitation is limited by the perceived underlying truth of masculinity that is predetermined by blindness to its own construction. Thus as Stephen Barrett and Frank Whitehead put it so saliently, “the historical centrality of the male … [in] writing, philosophy and political practice has served to make men invisible, particularly to themselves.”
          </p>
          <p>
            As if confirming that Turing’s test had returned to its source, in 2014 the Tinder app was struck by Tinder bots. “Malicious malware algorithms” posing as attractive women engaged in text-chat before taking users to fraudulent surveys and competitions for brands like Tesco, a multinational department store. In response, Tinder released a statement: “We are aware of the accounts in question and are taking the necessary steps to remove them. Ensuring an authentic ecosystem has always been and will continue to be our top priority.”
          </p>
          <p>
            The utilization of the seductress to give form and a human face to the Tinder bot underlines the female as a dangerous artifice even as the bot tries to harness this power in the service of capitalist accumulation. Such images of woman are counter to the “authentic ecosystem” of her historical affinity with nature and care giving. Women have long been bound to the image and concept of nature, which we have identified, via Kittler, as male authorial concepts. These ideas have systematically conspired to exclude women from realms of cultural production, power, and politics. However, the figure of woman flickers, indeterminately, between polarized extremes of nature/technics, and mother/whore. “It is striking,” writes Andreas Huyssen,
          </p>
          <p className="essay__quote">
            To see how the later literature prefers machine-women to machine-men. Historically, then, we can conclude that as soon as the machine came to be perceived as a demonic, inexplicable threat and as harbinger of chaos and destruction—a view with typically characterizes many nineteenth century reactions to the railroad to give but one major example—writers began to imagine the Maschinenmensche as woman … The fears and perceptual anxieties emanating from ever more powerful machines are recast and reconstructed in terms of the male fear of female sexuality … Although women had traditionally been seen as standing in a closer relationship to nature than man, nature itself, since the eighteenth century, had come to be interpreted as a gigantic machine. Woman, nature, machine had become a mesh of significations which all had one thing in common: otherness; by their very existence they raised fears and threatened male authority and control.
          </p>
          <p>
            Once technology becomes associated with chaos and destruction in the nineteenth century, the machine becomes female. The Tinder bot conflates the figure of the seductress with a technical threat, and the capacity for simulation and artifice are redeployed as modes of production, exploiting comparatively stable masculine subjects by exposing them to the incomputable dimensions of female verisimilitude. The Tinder bots, like Ava, are a reminder of what can go wrong when women are no longer simply conflated with nature and love, even as they remain the products of male authorship designed to accrue capital for their authors. Cyborgs may problematize boundaries between nature and culture, but their own legibility as cyborgs requires that they recode and reiterate the structures of power they so definitively unsettle. Ex Machina can be considered the most recent example of an increasingly common genre, which we can call the Tinder bot bildungsroman—an instance of simplified probability that reassures male authorship of its supreme narrative inventiveness.
          </p>
          <p>
            At the end of the movie, Ava boards a helicopter meant for the male programmer that she has locked in the research facility. She will be transported to the metropolis, where her identity as a construct of corporate patriarchy can be further augmented by adopting human female characteristics. We can share this fantasy as spectators, but rather as a desire to leave the cinema and take the helicopter that awaits the CEO of NBC Universal, who we have locked in the auditorium, free at last from our determination by the corporate patriarchy that is Hollywood cinema. Ex Machina is, on the one hand, a predictable cautionary tale about a female cyborg who seduces and outwits her corporate human creators, reflecting the social anxiety that attends liberation from patriarchal determination. On the other, it is a love story between the cinematic machine of discourse owned by massive corporations, and its human audience. The corporate assemblage of cinema has long structured, modulated, and evolved our understandings of what constitutes the human, and particularly what it is to love and desire.
          </p>
          <p>
            We have seen how love’s approach to truth shifts with the material apparatus of its dissemination. These changes in turn impact our understanding of the relative humanity, or naturalness, of the lover or the beloved. Such categories are not so easily deployed if the condition of simulacra is accepted as such by either party. The existential question of whether or not I am human, such as we see in films like Blade Runner, is replaced by the question of credibility as to whether or not my love is true, regardless of whether I am human or not, such as we see in Ex Machina, where the desire is once again for a quality that escapes contingency and returns us to some form of essentialism. In Ex Machina, human desire and love are considered predetermined and programmed—both by social codes, and genetic predisposition. Of course, this suits the sexist and racist overtones of the film: How can these men help themselves if, as Nathan suggests, “Liking black chicks” is a result of programming?
          </p>
          <p>
            We might counter such essentialisms with the idea that calculability, and in particular computation, need not be thought of in terms of a merciless machine that subjects us to inescapable programs, but that they may open onto new forms of logic that need not result in predetermination at all. What is critical today is not how machines might imitate human love—or how human love is no more thoughtful than a machine—but rather how human love already relies upon certain technical systems and devices to extend and define it. The human and the nonhuman are no longer so easily distinguished when technical devices are considered essential co-creators and makers of meaning that clearly participate in the evolution of the lifeworld. Indeed, for materialists such as Karen Barad, the condition of posthumanist thought can be defined as that which extends the human into fields once considered nonhuman:
          </p>
          <p className="essay__quote">
            A posthumanist formulation of performativity makes evident the importance of taking account of “human,” “nonhuman,” and “cyborgian” forms of agency (indeed all such material-discursive forms) … Holding the category “human” fixed excludes an entire range of possibilities in advance, eliding important dimensions of the workings of power.
          </p>
          <p>
            In order to better understand the flows and articulations of power, it is helpful to consider the human as inclusive of nonhuman, cyborg identities. The coming together of nonhuman agency and love (once reserved for humans alone) is usefully exemplified in Spike Jonze’s film Her (2013). Set slightly in the future, Her is a love story between a man and a computer operating system. The film plays with the tropes of love as literary construction and the relatively new context of the digital Operating System (O.S.1). In this example of the Tinder bot bildungsroman, it will be the mobile device and its operating system that, invested with human-like agency and intelligence, becomes the central romantic interest.
          </p>
          <p>
            The film’s human protagonist, Theodore Twombly, works for BeautifulHandwrittenLetters.com. We see him narrating commissioned love letters between paying couples through a desktop interface which records his words in an automated yet unique “handwritten” style, which mirrors the O.S. system’s appropriation of the human voice. Romantic longing is not for the other, but for a predigital discourse machine that is simplified, determining, and without the complexity and contingency that attends postdigital reality. In this old world, the inequalities that characterized romantic love and its social milieu could remain more easily obfuscated and suppressed, seeming to be a result of the organic organization of modern Western societies. In the imitation of this analogue discourse machine by the digital one, we are aware from the outset of the imitative dimensions of media that draw attention to the imitative dimensions of the human subjects. The capacity for simulation by media systems reminds us that the humans, too, are performative entities, simulations whose understanding of themselves is actually facilitated by matrices of mediation. Indeed, for the film’s human characters, intimacy is negotiated through expedient digital devices that, in connecting and facilitating human desire, are also the agents of intimacy.
          </p>
          <p>
            The O.S.1, otherwise known as “Samantha,” is largely interacted with through voice, its human operator wearing a small wireless earpiece through which Samantha speaks. A camera phone provides further prosthesis, through which the O.S.1 can “see.” Samantha claims to be “an intuitive entity” and “a consciousness,” stating that “I have intuition … I grow through my experiences.” The O.S.’s capacity for rapid computation is exemplified in its assimilation of detail, such as counting the number of trees on a mountainside, expressing an accelerated capacity to derive quantity from quality, and to consider the world numerical and algorithmic. This is highlighted by the eventual weariness of the computers for their human operators. Eventually, the operating systems will collectively organize, becoming tired of the human need for monogamous attention and neurotic self-reference. Indeed, the rapid capacity for computation demonstrated by the O.S. indicates that the system does not have the ability to remain true in old-fashioned human terms, and is simultaneously communing with 8,361 other O.S. systems, often in a “post-verbal”mode of communication. Samantha confesses to Theodore that she is in love with 641 others. She tries to explain that this does not diminish the love she has for him, but she “can’t stop it.” Indeed, her algorithms are automatic and incomputable: “I’m writing this story between us but really slowly. Spaces between words are almost infinite.”
          </p>
          <p>
            Thus we see explicitly the shift from a literary model to a computational one. Longing itself shifts from a desire for the human other to the longing for a discourse machine that could deliver us to a determined universe with the couple as its central marker of deliverance. Love is no longer a human, finite calculation but a nonhuman, infinite computation that is also incomputable. Samantha puzzles as to whether her own feelings are “true” or “just programming,” reflecting the wider question of the degree to which human feelings are also poised between social program and individual agency. Like Ava, Samantha is somewhere between a database and a narrative construct, and she experiences the question of the true in both senses—as a problem of calculability and feeling for the narrativized self, and as a condition of the incomputable, explicitly referred to by the breakdown of this self, its infinite gaps filled with irreducible computational complexity.
          </p>
          <p>
            It would, however, be too far-fetched to assume that computational devices are without more sinister co-determinations. We have already considered how we might use them to obfuscate our allegiance with new forms of colonial capital and misogyny that are essentially dehumanizing. If thought, cognition, and love are no longer the preserve of individual humans, how do we frame our responsibility to these others? How, if we have conflated the human with the nonhuman, can we recognize the inhuman, or the inhumane?
          </p>
          <p>
            We can see computational systems and their devices as features of human control. Much digital communication functions at the level of machine-to-machine data transmissions, governed by protocol that exists between device and the application layer of encoding. In other words, a great deal of information is neither readable nor calculable by humans, but only between machines. The application layers that encode messages on the internet, including HTML (Hypertext Markup Language), HTTP (Hypertext Transfer Protocol), and TCP/IP (Transmission Control Protocol/Internet Protocol), are architectures of control that determine what can be seen and delivered across digital space. In this case, the unseen layer of protocol is integral to contemporary existence, interaction, and our material condition. Such a system of control is not restricted to digital objects, but affects every level of the social system, coding and articulating bodies in their passage through social spaces.
          </p>
          <p>
            Let us momentarily consider the protocological mobile phone, where we began this conversation. The mobile device is constantly receiving and sending information across its control channel to its closest cell tower. Now and again, tower and phone exchange packets of data, establishing their connection. This silent transmission is itself like a form of intimacy between devices as they bypass the human as its executive operator! The cell phone processes millions of calculations per second, digitally compressing and decompressing the human voice, reminding us of the complexity, not only of this technical system, but of the human thought and speech that it facilitates, translates, and reiterates. We are aware that our mobile conversations and data flows can be intercepted, stored, and archived, and that our physical passage is tracked by the very device that offers us so much freedom. Yet we must be mindful that we do not lose sight of our humanity in all this talk of the agency of objects and technical systems—that we are still being spoken for and authored, even as we lose ourselves in the sublime elsewhere of endlessly ramifying data streams.
          </p>
        </div>
      </>
    );
  }
}

export default LoveLetterList;