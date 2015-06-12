(function(){angular.module("tmf",["ngAnimate","ngSanitize","ui.bootstrap","headroom","duScroll"])}).call(this),function(){angular.module("tmf").controller("MainCtrl",["$scope","$window",function(e,a){return e.form={email:null},e.subscribe=function(t){var s;return s="http://themigrantsfiles.us9.list-manage.com/subscribe?u=d40f524f34bc0a3d2144216d0&id=a367e896c5",s+="&MERGE0="+t,a.open(s,"_blank"),e.form.email=""}}])}.call(this),angular.module("tmf").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="main"><div class="main__header"><iframe width="100%" height="100%" allowfullscreen="" frameborder="0" src="//jplusplus.github.io/tmf-map/?lang=en_US" class="main__header__map"></iframe><div class="main__header__title"><div class="container"><div class="row"><div class="col-sm-6"><h1>The human and financial cost of 15 years of fortress Europe</h1><p class="lead">The Migrants Files is a consortium of journalists from over 10 European countries. It is coordinated by <a target="_blank" href="http://jplusplus.org">Journalism++</a>.</p><p><img src="assets/images/laurels.svg" height="20">&nbsp; Winner, Data Journalism Awards 2014<br><img src="assets/images/laurels.svg" height="20">&nbsp; Winner, European Press Prize 2015</p></div></div></div></div></div><div id="newsletter" class="main__subscribe"><div class="container"><div class="row text-center"><div class="col-sm-6 col-sm-offset-3"><h2>Subscribe to the newsletter</h2><form name="subscribeForm" ng-submit="subscribe(form.email)"><div class="lead">Every 3 months, get data-driven insights on migration to Europe.</div><div class="input-group input-group-lg"><input type="email" placeholder="your@email.com" required="" ng-model="form.email" class="form-control input-lg"><span class="input-group-btn"><button type="submit" ng-disabled="!subscribeForm.$valid" class="btn btn-default">Subscribe</button></span></div></form></div></div></div></div><div class="main__links"><div class="container"><div class="row text-center"><div class="col-sm-4 col-sm-offset-1"><h2>The Money Trails <sup>new</sup></h2><div class="lead">Refugees and migrants spend over €1&nbsp;billion a year to reach Europe. Europeans pay a similar amount to keep them out. A few companies benefit handsomely in the process.</div><a target="_blank" href="#the-money-trails" du-smooth-scroll="" class="btn btn-outline btn-white btn-lg">Read the story</a></div><div class="col-sm-4 col-sm-offset-2"><h2>Counting the Dead</h2><div class="lead">Over 30,000 refugees and migrants died in their attempt to reach or stay in Europe since 2000. Our investigation showed how European policies impacted the death rate.</div><a target="_blank" href="#counting-the-dead" du-smooth-scroll="" class="btn btn-outline btn-white btn-lg">Read the story</a></div></div><div class="main__links__journalismfund"><p>This project is supported in part by</p><a target="_blank" href="//journalismfund.eu/"><img src="assets/images/journalismfund.png" class="img-responsive"></a></div></div></div><div id="the-money-trails" class="main__article main__article--first"><div class="container"><div class="row"><div class="main__article__body col-sm-7"><h1 class="main__article__title">The Money Trails</h1><h4 id="june-18-2015">June 18, 2015</h4><h2 id="follow-the-money-some-of-it-into-the-sub-economy-spawned-by-migration">Follow the money – some of it – into the sub-economy spawned by migration</h2><p><strong>Sealing its borders to immigrants costs Europe’s taxpayers billions of euro a year. Policy implementation is costly, and the public purse has opened wide for a few select contractors. The Migrants’ Files project names some of the economic winners from Europe’s closed-door immigration policy.</strong></p><p>When the horrors of the war in Bosnia-Herzegovina shocked television viewers in the early 1990s, the European public could not look the other way. In response, many countries relaxed their entry policies.</p><p>But in 1997 Kurdish refugees fleeing the regime of Iraqi dictator Saddam Hussein met a closed door into Europe. This was just as the Schengen Agreement came into force codifying the free movement of people within the EU. At the same time, Schengen established some very restrictive hurdles for migrants wishing to enter Europe. That policy is clearly overwhelmed by today’s realities, with disastrous consequences for millions of refugees and migrants.</p><p>In August 2013, a group of 15 European journalists, statisticians and software developers launched The Migrants’ Files project to acquire reliable, comprehensive data on the deaths of migrants seeking to enter Europe.</p><p>This time, Migrants’ Files team follows the money, at least some of the funds that flow through public and private hands as Europe struggles to contain the flood of migrants at its borders. We look at some of the costs “Fortress Europe” imposes on taxpayers – and reveal some of the economic winners from Europe’s closed-door immigration policy.</p><h3 id="border-security-a-policy-creates-an-industry">Border security: A policy creates an industry</h3><p>According to UNHCR, the United Nation’s refugee agency, around sixty million people are currently on the move globally, in search of refuge. That’s the highest number of refugees since the end of the Second World War when much of Europe, east and west, lay in rubble.</p><p>In the first six months of 2014, which is the latest available data, 5.5 million people left their homes and fled to new shores. In all of 2014, some six hundred thousand people sought asylum in Europe. But to get there, they had overcome many considerable barriers, physical, financial and electronic. The latter includes military-grade technology supplied by privately held companies whose R&amp;D programs have been financed by EU subsidies.</p><p>As a tool to implement policy, security research has been a budget item since the European Commission established a working group on this topic in 2003. Conspicuously missing from that’s select group are any representatives from the IOM (International Organization of Migration) or UNHCR. But four leading European arms manufacturers participate in the working group – Airbus (formerly EADS), Thales, Finmeccanica and BAE – as do the technology companies Saab, Indra, Siemens and Diehl and others.</p><p>The EU’s security research working group has met only twice. That was apparently often enough to cement the structure, objectives and ideology of the group’s security research agenda.</p><p>A few arms and technology companies have reaped windfalls from the Europe’s immigration policy. The Migrants’ Files team ran the data, which means, in the first place, finding the data. The team analyzed 39 R&amp;D projects financed by the EU or by ESA, the European Space Agency from 2002 to 2013 with a total funding of 225 million euro. All spent to protect Europe’s borders.</p><p>Europe’s restrictive immigration policy has been a windfall for the companies that serve it. They undertake ambitious projects, which often bear impressive names, like Mariss, Limes and Dolphin. Other projects like Operamar, Wimaas and Aeroceptor promise airtight border surveillance. And some focus on tightening the borders themselves — Staborsec, Effisec, Fastpass, and ABC4EU — or on better control technology (Ingress). Then there are Doggies, Sniffer, Sniffles and Snoopy, advanced olfactory sensors to better detect humans at border crossings. Two projects worked on border patrol robots, one intended for use at sea (Uncoss) and one on land (Talos).</p><p>The Migrants’ Files research reveals that three companies garnered most of the EC’s R&amp;D budget for security. Of the 39 publicly funded projects, Airbus participated in ten, via 14 subsidiaries; Finmeccanica worked on 16 projects via 13 subsidiaries; and Thales tallied 18 projects, also through 13 subsidiaries.</p><p><a class="btn btn-doc btn-md" href="https://docs.google.com/spreadsheets/d/1OJJIVeSdmzNBUi6aBJIdVtHzv4-opnBewGpVBxJXRgw/edit#gid=6441497" target="_blank"><i class="fa fa-fw fa-table"></i>&nbsp; All data on research projects</a></p><iframe src="//derstandard.at/interaktiv/2015-06-migrantfiles-research/#en" style="width: 100%; height: 800px" scrolling="no" frameborder="0"></iframe><h3 id="software-a-favorite-security-budget-item">Software: A favorite security budget item</h3><p>R&amp;D funding constitutes only a fraction of the public money spent on border security for Europe. Frontex, the EU’s border security agency, coordinates member states’ border patrols, as per to the Dublin Regulation. Since its launch in 2004, Frontex alone has gobbled up close to a billion euros.</p><p>Since 2011, the Eurosur program has aimed at sharing border management information and updates in real time. Eurosur’s implementation requires coordination centers that will cost close to 200 million euros. The tangible results from these multi-billion euro investments are rarely assessed.</p><p>As a case in point, consider Eurodac, the European fingerprint database. The system exemplifies the lack of accountability endemic to migration-related policy implementation. With transparency limited, we still can piece together a good impression of how this alleged solution has performed. And it’s not a pretty picture.</p><p>Designed to identify asylum applicants by their fingerprints, Eurodac should enable EU countries to determine whether an asylum applicant who has been “found illegally present within an EU country has previously claimed asylum in another EU” member state. That sounds like a worthy system but in fact at least ten people a year are wrongly deported due to false system hits in the fingerprint ID scanning devices. The true number may be far higher.</p><p>According to an employee of a leading scanning device manufacturer, who spoke on condition of anonymity, every fingerprint scanner is calibrated to produce a certain ratio of false hits. (The team’s source could not reveal the false hit settings for the Eurodac’s devices.) It is disturbing to note that all EU member states, plus Norway, Iceland and Switzerland, currently rely on this inherently, admittedly flawed identification system. And no one in government, in the media or in the corporations themselves seems concerned with the human costs of the system’s manifestly poor performance.</p><p><a class="btn btn-doc btn-md" href="https://docs.google.com/spreadsheets/d/1wC72sDmuN-mvwgMcSWhO-R3E-1wmSE19B_KiW7RBRSc/edit#gid=171341358" target="_blank"><i class="fa fa-fw fa-table"></i>&nbsp; All data on amounts spent</a></p><h3 id="hardware-drones-and-boats-and-walls">Hardware: Drones and boats and walls</h3><p>Money for policing hardware has flowed briskly throughout the border security sector. Spain and Greece have spent over 70 million euro on boats, drones, off-road vehicles and other shiny and clever hardware to close their borders. And there’s always surveillance, a steady revenue stream for the chosen suppliers. Wall building is a growth industry, with Spain, Greece and Bulgaria investing heavily in erecting physical walls.</p><p>And building a wall is just the beginning. The walls surrounding the Spanish exclaves of Ceuta and Melilla, for instance, cost almost ten million euros a year to maintain.</p><p>The Italian government had a functioning arrangement whereby they paid Libyan strongmen to block refugees from leaving their territory en route to Italy. Some money went for detention centers or deportation flights. Since 2011, Italian taxpayers paid over 17 million euro to supply Libyan authorities with boats, training, night vision goggles, etc. to track refugees and migrants.</p><p><a class="btn btn-doc btn-md" href="https://docs.google.com/spreadsheets/d/1wC72sDmuN-mvwgMcSWhO-R3E-1wmSE19B_KiW7RBRSc/edit#gid=171341358" target="_blank"><i class="fa fa-fw fa-table"></i>&nbsp; All data on amounts spent</a></p><h3 id="the-high-costs-of-deportation">The high costs of deportation</h3><p>For some reason, the largest single cost stemming from Europe’s closed immigration policy has been off the radar, until now. It isn’t hardware, nor is it software. It’s bureaucracy. Red tape is very expensive. Since 2000, the 28 EU member states plus Norway, Switzerland and Iceland have deported millions of people. This has cost an enormous sum, at least 11.3 billion euro.</p><p>Various attempts have been made to measure the total costs of Europe’s asylum policies, but none has been made to assess the costs of deportations at the European level. Parliamentary committees in France and Italy tried to determine the costs of deportations. Their estimates were two to four times higher than those offered by the police.</p><p>Only Belgium records the costs of its deportations. None of the other countries contacted by the Migrants’ Files team were able to assess the full scope of their spending on deportations. In Sweden, only transport costs are tracked, not detention costs. The same goes for Switzerland, at least on a national level. In Germany, officials say that they did not have the capacity to calculate the total costs of deportations.</p><p>It is difficult to assemble good deportation data for Europe. Definitions of an individual’s status vary from country to country. What’s more, there are several ways to expel a non-citizen, from voluntary return to deportation. The European statistical office keeps a database of “returns following an order to leave,” yet neither Eurostat nor any other institution harmonizes national figures across Europe to learn precisely how many women and men are deported and at what cost. This performance data appears to be irrelevant for these authorities.</p><p>After carefully sifting through the available data, and acknowledging its deficits, The Migrants’ Files concludes that the cost of deportations in Europe is close to a billion euro per year.</p><p><a class="btn btn-doc btn-md" href="https://docs.google.com/spreadsheets/d/1rDThuJ1HVTsWWPEvauOIGuY0kd7h8fGkrxebmlMt7h4/edit#gid=0" target="_blank"><i class="fa fa-fw fa-table"></i>&nbsp; All data on deportations</a></p><p><div id="iframe-treemap"></div></p><script>\n  new pym.Parent(\'iframe-treemap\', \'http://jplusplus.github.io/tmf-moneytrail/\', {});\n</script><h3 id="what-migrants-pay-traffickers">What migrants pay traffickers</h3><p>Despite grandiose high-tech systems, the militarization of the Greek, Italian, Bulgarian and Spanish borders and the deportation of millions of migrants, migration at Europe’s door has not abated. If anything, it has risen yet higher in 2015 as great swathes of the Middle East, southern Asia and Africa suffer from armed and violent power struggles and broken economies.</p><p>Since 2000, the best data suggests that some 1.2 million undocumented refugees and migrants have made the journey into Europe by sea and land, excluding air travel. Several million more entered by using faked passports or simply by overstaying their visas. For undocumented refugees, passage is costly.</p><p>Migrants’ payments for passage in total form large stream in the sub-economy created by Europe’s closed doors. How large? The Migrants’ Files estimates that over the past fifteen years, refuges have paid a staggering 16 billion euro to travel to Europe. That for so many, their journey ends by drowning at sea adds a sense of tragedy to the frustration many feel with current EU policy.</p><p>It’s unclear whether transit prices or facilitators’ margins have gone up since the civil war in Syria. Indeed, too little is known about how these migration facilitators operate. The governments of Syria and Libya, for instance, are believed to have organized refugee boats of their own, both as a source of revenue and as a bartering chip in negotiations with European states. And matters are not helped by Europe’s failure to distinguish between crass human traffickers and genuinely compassionate helpers. The latter are also considered criminals by most European legislators.</p><p>Migration solutions like a hundred thousand dollar speedboat run from Libya to Italy are apparently on offer but overall the transportation market is divided across national and racial lines. Migrants from sub-Saharan Africa pay on average around 700 euro per person to ride down in the cargo holds of whatever boats are available, often with catastrophic results. Richer patrons from the Middle East may pay 2000 euro a head to travel on the same boat, but they are up on deck.</p><p>The most popular way to enter Europe remains by plane. So far, no solid data exists on the number of people who use planes as facilitators for slipping through Europe’s closed border. Anecdotes suggest that reaching Europe by air often involves a complex strategy. Iraqi refugees, for instance, can pay 16,000 euro to fly from Mosul to Paris via – and here’s the trick – Cayenne, Belem, Sao Paulo and Istanbul. Moroccan facilitators offer migrants a flight to Paris for five thousand euro that lets them bypass immigration authorities, instead using a hidden exit at Charles de Gaulle airport, an operation that obviously requires accomplices among airport staff and state administration.</p><p><a class="btn btn-doc btn-md" href="https://docs.google.com/spreadsheets/d/1cynO8lp6crS4p9kJZUqYUigEB15F2cAwGm7aD9cwoZU/edit#gid=779131653" target="_blank"><i class="fa fa-fw fa-table"></i>&nbsp; All data on money paid by refugees and migrants</a></p><p>The databases are made available under the <a href="http://opendatacommons.org/licenses/odbl/1.0/">Open Database License</a>. The contents of the databases belong to their respective owners.</p></div><div class="main__article__sidebar col-sm-4 col-sm-offset-1"><h3 class="main__article__sidebar__title">Stories</h3><h3 class="main__article__sidebar__title">Partners</h3><div class="main__article__sidebar__partner"><img alt="Libération" src="assets/images/liberation.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Dnevnik" src="assets/images/dnevnik.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="SRF" src="assets/images/srf.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Avgi" src="assets/images/avgi.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Der Standard" src="assets/images/derstandard.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Vice News" src="assets/images/vicenews.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Süddeutsche Zeitung" src="assets/images/sz.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Information" src="assets/images/information.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Český rozhlas" src="assets/images/czrozhlas.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Gazeta" src="assets/images/gazeta.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Groene Amsterdammer" src="assets/images/groeneamsterdammer.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="El Confidencial" src="https://detective-io.s3.amazonaws.com/img/partners/02%20-%20El%20Confidencial.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Radiobubble" src="https://detective-io.s3.amazonaws.com/img/partners/03%20-%20Radiobubble.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Sydsvenskan" src="https://detective-io.s3.amazonaws.com/img/partners/04%20-%20Sydsvenskan.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="lespresso" src="https://detective-io.s3.amazonaws.com/img/partners/05%20-%20lespresso.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="HLB" src="https://detective-io.s3.amazonaws.com/img/partners/06%20-%20HLB.png" class="img-thumbnail"></div><h3 class="main__article__sidebar__title">Credits</h3><p><strong>Coordination</strong>: Journalism++</p><p><strong>Research and code</strong>: Elaine Allaby, Michail Batikas (Radiobubble), Michael Bauer (Der Standard), Ana Isabel Carvalho (Journalism++ Porto), Jakob Espersen, Daniele Grasso (El Confidencial), Peter Grensund (Journalism++ Stockholm), Sylke Grunwald (SRF), Timo Grossenbacher (SRF), Markus Hametner (Der Standard), Kristian Holgersen, Alice Kohli, Ricardo Lafuente (Journalism++ Porto), Alexandre Léchenet (Libération), Jean-Marc Manach, Andrea Nelson Mauro (Dataninja), Jacopo Ottaviani, Adam Rodriques (Global Initiative), Lise Møller Schilder, Julian Schmidli (SRF), Katerina Stavroula (Radiobubble).</p><p><strong>Research assistants</strong>: Clotilde Lavergne-Bril, Niklas Svedberg.</p></div></div></div></div><div id="counting-the-dead" class="main__article main__article--second"><div class="container"><div class="row"><div class="main__article__body col-sm-7"><h1 class="main__article__title">Counting the dead</h1><h4 id="march-31-2014">March 31, 2014</h4><p>They know their lives are at risk, yet each year thousands of people from Africa, the Middle East and beyond — war refugees, asylum seekers and economic migrants — leave their homes and try to reach the promised land of Europe. On the third of October 2013, more than 360 would-be emigrants drowned off the coast of the Italian island of Lampedusa. A catastrophe of this dimension grabbed the media’s attention for a while and won the sympathy of the general public.</p><p>In response, later that month, the European Council decided to implement measures aimed at preventing a repeat of such a tragedy at the European Union&#39;s borders .The Council called for strengthening the EU’s border security co-ordination system, Frontex, more formally known as the European Agency for the Management of Operational Cooperation at the External Borders of the Member States of the European Union. And the Europe-wide surveillance system Eurosur began operations on December 2, 2013. Thus, once again, a large tragedy spurred real, if belated, action.</p><p>Well-intended though they doubtless were, these measures only address the tip of the migration iceberg. Little is known about how many men, women and children actually have lost their lives on their journey to Europe. Believing that policy unsupported by facts cannot be optimal, a consortium of European journalists committed themselves to systematically assembling and analyzing the data on the deaths of Europe’s would-be migrants. The Migrants&#39; Files project is partially funded by the European non-profit organization Journalismfund.eu.</p><h3 id="data-sources">Data sources</h3><p>By compiling rigorous datasets from various sources, The Migrants&#39; Files team aims at creating a comprehensive and reliable database on migrants&#39; deaths. Principal data sources for this effort include United for Intercultural Action, a non-profit whose network comprises over 550 organizations across Europe, and Fortress Europe, founded by the journalist and author Gabriele Del Grande, which also monitors the deaths and disappearances of migrants to Europe. The Migrants&#39; Files’ database also uses data from Puls, a project run by the University of Helsinki, Finland and commissioned by the Joint Research Center of the European Commission.</p><p>A consistent methodology is applied to all data, starting with so-called “open-source intelligence” (OSINT). Originated by the intelligence services, this approach collects data from publicly available sources such as media reports, government publications and grey literature. In the case of The Migrants&#39; Files, the number migrants who die while seeking refuge in Europe is obtained by monitoring real-time global news on asylum seekers, migration and human trafficking activities in and around Europe.</p><p>United for Intercultural Action monitored emigrant fatalities from 1993 until 2012, documenting about 17,000 deaths. Gabriele Del Grande reports more than 19,000 deaths since 1988. The database of The Migrants&#39; Files covers the period from January 1, 2000, until today.</p><p>The journalists of The Migrants&#39; Files noted that the various data sources often lacked compatibility since each organization structures its intelligence differently. This required extensive data cleaning and fact-checking, using OpenRefine, an open source analysis tool. In a second stage, The Migrants&#39; Files journalists established a database on Detective.io, a web-based tool specifically designed to support information gathering efforts for large-scale investigative reporting projects.</p><p>Early in the process of establishing The Migrants&#39; Files’ data methodology, sixteen students from the Laboratory of Data Journalism at the University of Bologna, Italy, contributed valuable fact-checking of more than 250 incidents, supervised by Prof. Carlo Gubitosa.</p><p>The Migrants&#39; Files database of emigrant deaths now structures the data according to name, age, gender and nationality. Every fatal incident is recorded with its date, latitude, longitude, number of dead and/or missing as well as the cause.</p><h3 id="margins-for-error">Margins for error</h3><p>Overcoming the issue of data compatibility, The Migrants&#39; Files journalists have managed to create the most comprehensive survey of European migration fatalities available today. That said, the project team is aware that biases inherent in every dataset cannot be fully eliminated.</p><p>What’s more, aggregating several sources of data can easily produce duplicates. When duplicates are detected are manually removed, one at a time. Accuracy is laborious.</p><p>Beyond duplicates, some individuals had been registered as missing, say, identified by survivors of a shipwreck. If a body washes ashore in another location days or weeks later, it is virtually impossible to assign it to an earlier incident. And some fatal incidents have not been reported in any form. Hence, other sources of intelligence, such as testimonies, are carefully reviewed and double-checked before registering an incident in the database. Nonetheless, there is no getting around the fact that some individuals and events cannot be documented since no evidence offers confirmation. This sad reality cannot be redressed, rendering all fatality estimates conservative. The true numbers of dead are doubtless higher than recorded.</p><p>Moreover, assessing the geolocation and mapping the registered incidents imposes other kinds of difficulties. The map of The Migrants’ Files also presents incidents far from European borders due to the methodology used. For example, a boat capsized on its route from Algeria to Spain can be geolocated in Algeria and at the country’s center.</p><p>The Migrants’ Files is ongoing. The team continues to collect intelligence on the deaths of Europe’s would-be emigrants. The project aims to further improve the quality of its data, to shed more light on the situation of emigrants seeking refuge in Europe and to consistently track European asylum and migration policy, particularly because the broader media often ignores the issue until another large-scale emigrant tragedy thrusts it back to the top of the news cycle.</p><p>If you wish to contribute, please contact us by email debug@themigrantsfiles.com or through the Twitter hashtag #MigrantsFiles.</p><p><a class="btn btn-doc btn-md" href="https://docs.google.com/spreadsheets/d/1YNqIzyQfEn4i_be2GGWESnG2Q80E_fLASffsXdCOftI/edit?usp=sharing" target="_blank"><i class="fa fa-fw fa-table"></i>&nbsp; All data on migrant and refugee deaths</a></p><p>The database is made available under the <a href="http://opendatacommons.org/licenses/odbl/1.0/">Open Database License</a>. The contents of the database belong to their respective owners.</p><p>Cover picture: Spanish coastguards intercept a migrants&#39; boat off Tenerife © UNHCR A. Rodrigez</p></div><div class="main__article__sidebar col-sm-4 col-sm-offset-1"><h3 class="main__article__sidebar__title">Stories</h3><p><a target="_blank" href="http://www.nzz.ch/aktuell/international/auslandnachrichten/die-toten-vor-europas-tueren-1.18272891#">Die Toten vor Europas Türen (NZZ)</a></p><p><a target="_blank" href="http://www.nzz.ch/aktuell/international/auslandnachrichten/daten-einer-tragoedie-1.18272916">Daten einer Tragödie (NZZ)</a></p><p><a target="_blank" href="http://www.rbdata.gr/themigrantsfiles/index.html">Τα θανατηφόρα τείχη της Ευρώπης (Radiobubble)</a></p><p><a target="_blank" href="http://www.elconfidencial.com/mundo/2014-03-31/trece-anos-de-inmigracion-mas-de-23-000-muertos-por-intentar-alcanzar-europa_108953/">Trece años de inmigración: más de 23.000 muertos por intentar alcanzar Europa (El Confidencial)</a></p><p><a target="_blank" href="http://www.elconfidencial.com/mundo/2014-03-31/ante-el-cierre-de-fronteras-los-inmigrantes-se-vuelcan-hacia-rutas-mas-peligrosas_109006/">Ante el cierre de fronteras, los inmigrantes se vuelcan hacia rutas más peligrosas (El Confidencial)</a></p><p><a target="_blank" href="http://hbl.fi/nyheter/2014-03-31/587881/fastning-europa-kraver-tusentals-liv">Fästning Europa kräver tusentals liv (€, HBL)</a></p><p><a target="_blank" href="http://speciali.espresso.repubblica.it/interattivi-2014/migranti/index.html">Migranti, la guerra del Mediterraneo (L&#8217;Espresso)</a></p><p><a target="_blank" href="http://www.mo.be/nieuws/de-weg-naar-europa-een-kerkhof">De weg naar Europa is een kerkhof (Mondial Nieuws)</a></p><p><a target="_blank" href="http://www.monde-diplomatique.fr/carnet/2014-03-31-morts-aux-frontieres">« Ces gens-là sont morts, ce ne sont plus des migrants » (Le Monde Diplomatique)</a></p><p><a target="_blank" href="http://euobserver.com/justice/123682">Surveying migrants&#8217; deaths at Europe&#8217;s door (EU Observer)</a></p><h3 class="main__article__sidebar__title">Partners</h3><div class="main__article__sidebar__partner"><img alt="NZZ" src="https://detective-io.s3.amazonaws.com/img/partners/01%20-%20NZZ.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="El Confidencial" src="https://detective-io.s3.amazonaws.com/img/partners/02%20-%20El%20Confidencial.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Radiobubble" src="https://detective-io.s3.amazonaws.com/img/partners/03%20-%20Radiobubble.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Sydsvenskan" src="https://detective-io.s3.amazonaws.com/img/partners/04%20-%20Sydsvenskan.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="lespresso" src="https://detective-io.s3.amazonaws.com/img/partners/05%20-%20lespresso.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="HLB" src="https://detective-io.s3.amazonaws.com/img/partners/06%20-%20HLB.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="Le Monde Diplomatique" src="https://detective-io.s3.amazonaws.com/img/partners/07%20-%20Le%20Monde%20Diplomatique.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="EUObserver" src="https://detective-io.s3.amazonaws.com/img/partners/08%20-%20EUObserver.png" class="img-thumbnail"></div><div class="main__article__sidebar__partner"><img alt="MO" src="https://detective-io.s3.amazonaws.com/img/partners/09%20-%20MO.png" class="img-thumbnail"></div><h3 class="main__article__sidebar__title">Credits</h3><p>The Migrants’ Files is a project by data journalism agencies Journalism++ SAS, Journalism++ Stockholm and Dataninja; media outlets Neue Zürcher Zeitung, El Confidencial, Sydsvenskan and Radiobubble as well as freelance journalists Alice Kohli, Jean-Marc Manach and Jacopo Ottaviani. The project is partially financed by Journalismfund.eu.</p><p>The data for The Migrants’ Files draw on previous work by <a target="_blank" href="http://www.unitedagainstracism.org">United for Intercultural Action</a>, Gabriele Del Grande\'s Fortress Europe and Puls, as well as additional research.</p><p>Sixteen students of the Laboratory of Data Journalism at the University of Bologna have contributed to the project checking the details of a sample of incidents, supervised by Prof. Carlo Gubitosa.</p><p>Media partners supporting the journalism consortium’s work are L’Espresso, Le Monde Diplomatique.</p></div></div></div></div></div>'),e.put("app/components/header/header.html",'<header headroom="" class="header navbar navbar-default navbar-fixed-top"><div ng-init="collapse = true" class="container"><div class="pull-right visible-xs"><button type="button" ng-click="collapse = !collapse" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="navbar-header"><a class="navbar-brand header__brand">The Migrants\' Files</a></div><ul ng-class="{ collapse: collapse }" class="nav navbar-nav navbar-collapse header__links"><li du-scrollspy="newsletter"><a href="#newsletter" du-smooth-scroll="">Newsletter</a></li><li du-scrollspy="the-money-trails"><a href="#the-money-trails" du-smooth-scroll="">The money trails <sup>new</sup></a></li><li du-scrollspy="counting-the-dead"><a href="#counting-the-dead" du-smooth-scroll="">Counting the dead</a></li></ul></div></header>')
}]);