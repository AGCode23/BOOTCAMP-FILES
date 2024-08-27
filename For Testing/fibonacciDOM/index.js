// Fibonacci

var output = [];
var n;
function fibonacci() {
  n = document.getElementById("fibNum").value;
  var x = parseInt(n);
  if (x === 0) {
    output = ["NA"];
    document.querySelector(".text").innerHTML = output;
  } else if (x === 1) {
    output = [0];
    document.querySelector(".text").innerHTML = output;
  } else if (x === 2) {
    output = [0, 1];
    document.querySelector(".text").innerHTML = output;
  } else if (x >= 3 && x <= 1477) {
    output = [0, 1];
    for (i = 2; i < x; i++) {
      sum = output[i - 1] + output[i - 2];
      output.push(sum);
    }

    document.querySelector(".text").innerHTML = output.join(", ");
  } else {
    document.querySelector(".text").innerHTML =
      "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025, 20365011074, 32951280099, 53316291173, 86267571272, 139583862445, 225851433717, 365435296162, 591286729879, 956722026041, 1548008755920, 2504730781961, 4052739537881, 6557470319842, 10610209857723, 17167680177565, 27777890035288, 44945570212853, 72723460248141, 117669030460994, 190392490709135, 308061521170129, 498454011879264, 806515533049393, 1304969544928657, 2111485077978050, 3416454622906707, 5527939700884757, 8944394323791464, 14472334024676220, 23416728348467684, 37889062373143900, 61305790721611580, 99194853094755490, 160500643816367070, 259695496911122560, 420196140727489660, 679891637638612200, 1100087778366101900, 1779979416004714000, 2880067194370816000, 4660046610375530000, 7540113804746346000, 12200160415121877000, 19740274219868226000, 31940434634990100000, 51680708854858330000, 83621143489848430000, 135301852344706760000, 218922995834555200000, 354224848179262000000, 573147844013817200000, 927372692193079200000, 1.5005205362068963e+21, 2.4278932283999755e+21, 3.9284137646068717e+21, 6.356306993006848e+21, 1.028472075761372e+22, 1.6641027750620568e+22, 2.6925748508234288e+22, 4.356677625885486e+22, 7.049252476708914e+22, 1.14059301025944e+23, 1.8455182579303315e+23, 2.9861112681897715e+23, 4.831629526120103e+23, 7.817740794309875e+23, 1.2649370320429978e+24, 2.0467111114739851e+24, 3.3116481435169827e+24, 5.358359254990968e+24, 8.670007398507951e+24, 1.402836665349892e+25, 2.269837405200687e+25, 3.6726740705505786e+25, 5.942511475751265e+25, 9.615185546301844e+25, 1.555769702205311e+26, 2.5172882568354952e+26, 4.0730579590408064e+26, 6.590346215876301e+26, 1.0663404174917107e+27, 1.7253750390793408e+27, 2.791715456571052e+27, 4.5170904956503927e+27, 7.308805952221445e+27, 1.1825896447871837e+28, 1.9134702400093282e+28, 3.096059884796512e+28, 5.009530124805841e+28, 8.105590009602353e+28, 1.3115120134408193e+29, 2.1220710144010545e+29, 3.4335830278418734e+29, 5.5556540422429276e+29, 8.989237070084801e+29, 1.454489111232773e+30, 2.353412818241253e+30, 3.807901929474026e+30, 6.161314747715279e+30, 9.969216677189305e+30, 1.6130531424904583e+31, 2.6099748102093888e+31, 4.223027952699847e+31, 6.8330027629092365e+31, 1.1056030715609085e+32, 1.788903347851832e+32, 2.8945064194127406e+32, 4.683409767264573e+32, 7.577916186677313e+32, 1.2261325953941887e+33, 1.98392421406192e+33, 3.2100568094561087e+33, 5.193981023518028e+33, 8.404037832974137e+33, 1.3598018856492165e+34, 2.20020566894663e+34, 3.5600075545958467e+34, 5.760213223542477e+34, 9.320220778138323e+34, 1.50804340016808e+35, 2.4400654779819122e+35, 3.9481088781499925e+35, 6.388174356131905e+35, 1.0336283234281898e+36, 1.6724457590413803e+36, 2.70607408246957e+36, 4.37851984151095e+36, 7.08459392398052e+36, 1.146311376549147e+37, 1.854770768947199e+37, 3.001082145496346e+37, 4.855852914443544e+37, 7.85693505993989e+37, 1.2712787974383434e+38, 2.0569723034323324e+38, 3.328251100870676e+38, 5.385223404303009e+38, 8.713474505173684e+38, 1.409869790947669e+39, 2.2812172414650375e+39, 3.691087032412707e+39, 5.972304273877745e+39, 9.663391306290452e+39, 1.5635695580168196e+40, 2.529908688645865e+40, 4.0934782466626846e+40, 6.623386935308549e+40, 1.0716865181971233e+41, 1.7340252117279783e+41, 2.8057117299251016e+41, 4.53973694165308e+41, 7.34544867157818e+41, 1.188518561323126e+42, 1.923063428480944e+42, 3.11158198980407e+42, 5.034645418285014e+42, 8.146227408089083e+42, 1.3180872826374099e+43, 2.1327100234463182e+43, 3.450797306083728e+43, 5.583507329530046e+43, 9.034304635613775e+43, 1.4617811965143821e+44, 2.3652116600757594e+44, 3.826992856590142e+44, 6.192204516665901e+44, 1.0019197373256042e+45, 1.6211401889921942e+45, 2.6230599263177984e+45, 4.2442001153099927e+45, 6.86726004162779e+45, 1.1111460156937784e+46, 1.7978720198565574e+46, 2.9090180355503355e+46, 4.706890055406893e+46, 7.615908090957229e+46, 1.2322798146364122e+47, 1.993870623732135e+47, 3.2261504383685474e+47, 5.2200210621006825e+47, 8.44617150046923e+47, 1.3666192562569911e+48, 2.2112364063039142e+48, 3.577855662560905e+48, 5.7890920688648195e+48, 9.366947731425724e+48, 1.5156039800290544e+49, 2.452298753171627e+49, 3.967902733200681e+49, 6.420201486372308e+49, 1.0388104219572989e+50, 1.6808305705945297e+50, 2.7196409925518287e+50, 4.400471563146358e+50, 7.120112555698187e+50, 1.1520584118844544e+51, 1.864069667454273e+51, 3.016128079338727e+51, 4.880197746793e+51, 7.896325826131728e+51, 1.2776523572924728e+52, 2.0672849399056455e+52, 3.344937297198118e+52, 5.412222237103764e+52, 8.757159534301882e+52, 1.4169381771405647e+53, 2.2926541305707528e+53, 3.7095923077113174e+53, 6.002246438282071e+53, 9.711838745993388e+53, 1.571408518427546e+54, 2.5425923930268848e+54, 4.114000911454431e+54, 6.656593304481316e+54, 1.0770594215935747e+55, 1.7427187520417062e+55, 2.819778173635281e+55, 4.562496925676987e+55, 7.382275099312268e+55, 1.1944772024989255e+56, 1.9327047124301523e+56, 3.1271819149290778e+56, 5.05988662735923e+56, 8.187068542288308e+56, 1.3246955169647538e+57, 2.1434023711935847e+57, 3.4680978881583385e+57, 5.611500259351923e+57, 9.07959814751026e+57, 1.4691098406862182e+58, 2.3770696554372443e+58, 3.846179496123462e+58, 6.223249151560707e+58, 1.0069428647684168e+59, 1.6292677799244873e+59, 2.636210644692904e+59, 4.265478424617391e+59, 6.901689069310295e+59, 1.1167167493927686e+60, 1.806885656323798e+60, 2.923602405716567e+60, 4.7304880620403654e+60, 7.654090467756932e+60, 1.2384578529797298e+61, 2.003866899755423e+61, 3.242324752735153e+61, 5.246191652490576e+61, 8.488516405225729e+61, 1.3734708057716305e+62, 2.2223224462942035e+62, 3.5957932520658337e+62, 5.818115698360037e+62, 9.41390895042587e+62, 1.5232024648785907e+63, 2.4645933599211777e+63, 3.987795824799768e+63, 6.452389184720946e+63, 1.0440185009520713e+64, 1.6892574194241658e+64, 2.733275920376237e+64, 4.422533339800403e+64, 7.15580926017664e+64, 1.1578342599977044e+65, 1.8734151860153683e+65, 3.0312494460130726e+65, 4.90466463202844e+65, 7.9359140780415135e+65, 1.2840578710069954e+66, 2.0776492788111467e+66, 3.361707149818142e+66, 5.439356428629289e+66, 8.801063578447432e+66, 1.424042000707672e+67, 2.3041483585524152e+67, 3.728190359260087e+67, 6.032338717812503e+67, 9.760529077072589e+67, 1.579286779488509e+68, 2.555339687195768e+68, 4.134626466684277e+68, 6.689966153880045e+68, 1.0824592620564322e+69, 1.751455877444437e+69, 2.833915139500869e+69, 4.5853710169453055e+69, 7.419286156446174e+69, 1.200465717339148e+70, 1.9423943329837654e+70, 3.1428600503229136e+70, 5.085254383306679e+70, 8.228114433629592e+70, 1.331336881693627e+71, 2.1541483250565862e+71, 3.485485206750213e+71, 5.6396335318068e+71, 9.125118738557013e+71, 1.4764752270363813e+72, 2.3889871008920825e+72, 3.865462327928464e+72, 6.254449428820547e+72, 1.0119911756749011e+73, 1.637436118556956e+73, 2.649427294231857e+73, 4.2868634127888125e+73, 6.93629070702067e+73, 1.1223154119809483e+74, 1.8159444826830153e+74, 2.9382598946639633e+74, 4.754204377346978e+74, 7.692464272010942e+74, 1.244666864935792e+75, 2.013913292136886e+75, 3.258580157072678e+75, 5.272493449209564e+75, 8.531073606282242e+75, 1.3803567055491806e+76, 2.2334640661774048e+76, 3.613820771726585e+76, 5.84728483790399e+76, 9.461105609630574e+76, 1.5308390447534564e+77, 2.476949605716514e+77, 4.0077886504699705e+77, 6.484738256186484e+77, 1.0492526906656455e+78, 1.697726516284294e+78, 2.7469792069499394e+78, 4.444705723234234e+78, 7.191684930184173e+78, 1.1636390653418406e+79, 1.882807558360258e+79, 3.046446623702099e+79, 4.9292541820623566e+79, 7.975700805764455e+79, 1.290495498782681e+80, 2.0880655793591266e+80, 3.3785610781418077e+80, 5.466626657500934e+80, 8.845187735642742e+80, 1.4311814393143676e+81, 2.315700212878642e+81, 3.7468816521930098e+81, 6.062581865071651e+81, 9.809463517264662e+81, 1.5872045382336313e+82, 2.5681508899600975e+82, 4.155355428193729e+82, 6.723506318153826e+82, 1.0878861746347554e+83, 1.760236806450138e+83, 2.848122981084893e+83, 4.608359787535031e+83, 7.456482768619924e+83, 1.2064842556154955e+84, 1.952132532477488e+84, 3.1586167880929834e+84, 5.110749320570471e+84, 8.269366108663455e+84, 1.3380115429233926e+85, 2.164948153789738e+85, 3.5029596967131306e+85, 5.667907850502869e+85, 9.170867547216e+85, 1.483877539771887e+86, 2.400964294493487e+86, 3.884841834265374e+86, 6.285806128758862e+86, 1.0170647963024235e+87, 1.6456454091783097e+87, 2.662710205480733e+87, 4.308355614659043e+87, 6.971065820139776e+87, 1.127942143479882e+88, 1.8250487254938595e+88, 2.9529908689737415e+88, 4.7780395944676006e+88, 7.731030463441342e+88, 1.2509070057908943e+89, 2.0240100521350286e+89, 3.274917057925923e+89, 5.298927110060952e+89, 8.573844167986874e+89, 1.3872771278047826e+90, 2.24466154460347e+90, 3.631938672408253e+90, 5.876600217011723e+90, 9.508538889419975e+90, 1.5385139106431697e+91, 2.489367799585167e+91, 4.0278817102283365e+91, 6.5172495098135036e+91, 1.054513122004184e+92, 1.7062380729855341e+92, 2.760751194989718e+92, 4.466989267975252e+92, 7.22774046296497e+92, 1.1694729730940222e+93, 1.8922470193905192e+93, 3.0617199924845414e+93, 4.95396701187506e+93, 8.015687004359602e+93, 1.2969654016234662e+94, 2.0985341020594266e+94, 3.395499503682893e+94, 5.4940336057423194e+94, 8.889533109425212e+94, 1.438356671516753e+95, 2.327309982459274e+95, 3.765666653976027e+95, 6.092976636435301e+95, 9.858643290411328e+95, 1.5951619926846628e+96, 2.5810263217257956e+96, 4.1761883144104584e+96, 6.7572146361362535e+96, 1.0933402950546712e+97, 1.7690617586682965e+97, 2.8624020537229677e+97, 4.631463812391264e+97, 7.493865866114232e+97, 1.2125329678505497e+98, 1.961919554461973e+98, 3.1744525223125226e+98, 5.1363720767744955e+98, 8.310824599087018e+98, 1.3447196675861514e+99, 2.175802127494853e+99, 3.520521795081005e+99, 5.696323922575858e+99, 9.216845717656862e+99, 1.491316964023272e+100, 2.413001535788958e+100, 3.90431849981223e+100, 6.317320035601188e+100, 1.0221638535413418e+101, 1.6538958571014605e+101, 2.6760597106428023e+101, 4.329955567744263e+101, 7.006015278387065e+101, 1.1335970846131328e+102, 1.8341986124518392e+102, 2.967795697064972e+102, 4.801994309516812e+102, 7.769790006581784e+102, 1.2571784316098597e+103, 2.034157432268038e+103, 3.2913358638778977e+103, 5.325493296145936e+103, 8.616829160023833e+103, 1.394232245616977e+104, 2.2559151616193602e+104, 3.6501474072363375e+104, 5.906062568855698e+104, 9.556209976092036e+104, 1.5462272544947735e+105, 2.501848252103977e+105, 4.0480755065987505e+105, 6.549923758702727e+105, 1.0597999265301477e+106, 1.7147923024004204e+106, 2.774592228930568e+106, 4.4893845313309884e+106, 7.263976760261557e+106, 1.1753361291592545e+107, 1.9017338051854102e+107, 3.0770699343446646e+107, 4.978803739530075e+107, 8.055873673874739e+107, 1.3034677413404814e+108, 2.1090551087279553e+108, 3.412522850068437e+108, 5.521577958796393e+108, 8.93410080886483e+108, 1.4455678767661223e+109, 2.3389779576526055e+109, 3.784545834418728e+109, 6.123523792071334e+109, 9.908069626490062e+109, 1.6031593418561396e+110, 2.5939663045051458e+110, 4.197125646361285e+110, 6.791091950866431e+110, 1.0988217597227716e+111, 1.7779309548094147e+111, 2.8767527145321864e+111, 4.654683669341601e+111, 7.531436383873787e+111, 1.218612005321539e+112, 1.9717556437089175e+112, 3.1903676490304564e+112, 5.162123292739374e+112, 8.35249094176983e+112, 1.3514614234509204e+113, 2.1867105176279034e+113, 3.538171941078824e+113, 5.724882458706727e+113, 9.263054399785552e+113, 1.498793685849228e+114, 2.4250991258277832e+114, 3.923892811677011e+114, 6.348991937504794e+114, 1.0272884749181806e+115, 1.6621876686686599e+115, 2.6894761435868405e+115, 4.3516638122555e+115, 7.041139955842341e+115, 1.1392803768097841e+116, 1.8433943723940184e+116, 2.9826747492038025e+116, 4.826069121597821e+116, 7.808743870801623e+116, 1.2634812992399444e+117, 2.0443556863201068e+117, 3.307836985560051e+117, 5.352192671880158e+117, 8.660029657440209e+117, 1.4012222329320367e+118, 2.2672251986760575e+118, 3.668447431608094e+118, 5.935672630284151e+118, 9.604120061892246e+118, 1.5539792692176397e+119, 2.514391275406864e+119, 4.0683705446245036e+119, 6.582761820031368e+119, 1.065113236465587e+120, 1.7233894184687237e+120, 2.788502654934311e+120, 4.5118920734030345e+120, 7.300394728337345e+120, 1.181228680174038e+121, 1.9112681530077724e+121, 3.0924968331818106e+121, 5.003764986189583e+121, 8.096261819371394e+121, 1.3100026805560978e+122, 2.119628862493237e+122, 3.429631543049335e+122, 5.549260405542572e+122, 8.978891948591907e+122, 1.452815235413448e+123, 2.3507044302726385e+123, 3.803519665686087e+123, 6.154224095958725e+123, 9.957743761644812e+123, 1.6111967857603536e+124, 2.6069711619248347e+124, 4.2181679476851883e+124, 6.825139109610023e+124, 1.1043307057295211e+125, 1.7868446166905234e+125, 2.8911753224200445e+125, 4.678019939110568e+125, 7.569195261530612e+125, 1.224721520064118e+126, 1.981641046217179e+126, 3.206362566281297e+126, 5.188003612498476e+126, 8.394366178779773e+126, 1.358236979127825e+127, 2.1976735970058023e+127, 3.5559105761336274e+127, 5.75358417313943e+127, 9.309494749273056e+127, 1.5063078922412486e+128, 2.437257367168554e+128, 3.943565259409803e+128, 6.380822626578357e+128, 1.032438788598816e+129, 1.6705210512566517e+129, 2.7029598398554676e+129, 4.3734808911121193e+129, 7.076440730967588e+129, 1.1449921622079707e+130, 1.8526362353047294e+130, 2.9976283975127e+130, 4.85026463281743e+130, 7.84789303033013e+130, 1.269815766314756e+131, 2.054605069347769e+131, 3.324420835662525e+131, 5.379025905010295e+131, 8.70344674067282e+131, 1.4082472645683115e+132, 2.2785919386355933e+132, 3.6868392032039045e+132, 5.965431141839498e+132, 9.652270345043403e+132, 1.5617701486882901e+133, 2.52699718319263e+133, 4.08876733188092e+133, 6.61576451507355e+133, 1.070453184695447e+134, 1.732029636202802e+134, 2.802482820898249e+134, 4.534512457101051e+134, 7.3369952779993e+134, 1.1871507735100351e+135, 1.920850301309965e+135, 3.1080010748200005e+135, 5.0288513761299655e+135, 8.136852450949967e+135, 1.3165703827079932e+136, 2.1302556278029898e+136, 3.446826010510983e+136, 5.577081638313973e+136, 9.023907648824956e+136, 1.460098928713893e+137, 2.3624896935963886e+137, 3.822588622310282e+137, 6.1850783159066705e+137, 1.0007666938216952e+138, 1.6192745254123623e+138, 2.6200412192340575e+138, 4.2393157446464195e+138, 6.859356963880477e+138, 1.1098672708526896e+139, 1.7958029672407375e+139, 2.905670238093427e+139, 4.7014732053341643e+139, 7.607143443427591e+139, 1.2308616648761756e+140, 1.9915760092189344e+140, 3.22243767409511e+140, 5.2140136833140446e+140, 8.436451357409155e+140, 1.36504650407232e+141, 2.2086916398132357e+141, 3.573738143885556e+141, 5.782429783698791e+141, 9.356167927584346e+141, 1.513859771128314e+142, 2.4494765638867485e+142, 3.9633363350150624e+142, 6.412812898901811e+142, 1.0376149233916874e+143, 1.6788962132818685e+143, 2.716511136673556e+143, 4.395407349955425e+143, 7.111918486628981e+143, 1.1507325836584407e+144, 1.861924432321339e+144, 3.0126570159797796e+144, 4.8745814483011185e+144, 7.887238464280898e+144, 1.2761819912582017e+145, 2.0649058376862915e+145, 3.3410878289444935e+145, 5.405993666630785e+145, 8.747081495575278e+145, 1.4153075162206063e+146, 2.2900156657781344e+146, 3.7053231819987407e+146, 5.995338847776875e+146, 9.700662029775616e+146, 1.5696000877552492e+147, 2.5396662907328107e+147, 4.10926637848806e+147, 6.648932669220871e+147, 1.0758199047708932e+148, 1.7407131716929801e+148, 2.8165330764638734e+148, 4.5572462481568536e+148, 7.373779324620727e+148, 1.193102557277758e+149, 1.9304804897398307e+149, 3.1235830470175887e+149, 5.054063536757419e+149, 8.177646583775008e+149, 1.3231710120532428e+150, 2.1409356704307436e+150, 3.464106682483987e+150, 5.60504235291473e+150, 9.069149035398718e+150, 1.4674191388313447e+151, 2.3743340423712165e+151, 3.841753181202561e+151, 6.216087223573778e+151, 1.0057840404776338e+152, 1.6273927628350117e+152, 2.6331768033126457e+152, 4.260569566147657e+152, 6.893746369460303e+152, 1.115431593560796e+153, 1.8048062305068262e+153, 2.920237824067622e+153, 4.725044054574448e+153, 7.64528187864207e+153, 1.2370325933216519e+154, 2.001560781185859e+154, 3.238593374507511e+154, 5.24015415569337e+154, 8.478747530200881e+154, 1.3718901685894252e+155, 2.219764921609513e+155, 3.5916550901989383e+155, 5.811420011808452e+155, 9.403075102007391e+155, 1.5214495113815843e+156, 2.4617570215823236e+156, 3.983206532963908e+156, 6.444963554546232e+156, 1.042817008751014e+157, 1.6873133642056372e+157, 2.7301303729566514e+157, 4.4174437371622886e+157, 7.147574110118939e+157, 1.1565017847281227e+158, 1.8712591957400167e+158, 3.0277609804681397e+158, 4.899020176208156e+158, 7.926781156676296e+158, 1.2825801332884451e+159, 2.075258248956075e+159, 3.35783838224452e+159, 5.433096631200595e+159, 8.790935013445115e+159, 1.422403164464571e+160, 2.3014966658090826e+160, 3.723899830273653e+160, 6.025396496082736e+160, 9.749296326356389e+160, 1.5774692822439125e+161, 2.552398914879551e+161, 4.1298681971234637e+161, 6.682267112003014e+161, 1.0812135309126478e+162, 1.7494402421129492e+162, 2.8306537730255968e+162, 4.580094015138546e+162, 7.410747788164143e+162, 1.1990841803302688e+163, 1.940158959146683e+163, 3.1392431394769516e+163, 5.0794020986236347e+163, 8.218645238100586e+163, 1.329804733672422e+164, 2.1516692574824805e+164, 3.4814739911549024e+164, 5.633143248637383e+164, 9.114617239792286e+164, 1.474776048842967e+165, 2.3862377728221955e+165, 3.8610138216651624e+165, 6.2472515944873575e+165, 1.010826541615252e+166, 1.635551701063988e+166, 2.64637824267924e+166, 4.281929943743228e+166, 6.928308186422468e+166, 1.1210238130165696e+167, 1.8138546316588163e+167, 2.934878444675386e+167, 4.748733076334203e+167, 7.683611521009589e+167, 1.2432344597343791e+168, 2.011595611835338e+168, 3.2548300715697173e+168, 5.266425683405056e+168, 8.521255754974774e+168, 1.378768143837983e+169, 2.2308937193354602e+169, 3.6096618631734433e+169, 5.8405555825089035e+169, 9.450217445682346e+169, 1.529077302819125e+170, 2.47409904738736e+170, 4.0031763502064847e+170, 6.477275397593844e+170, 1.048045174780033e+171, 1.6957727145394175e+171, 2.7438178893194507e+171, 4.439590603858868e+171, 7.183408493178319e+171, 1.1622999097037188e+172, 1.8806407590215506e+172, 3.0429406687252694e+172, 4.92358142774682e+172, 7.96652209647209e+172, 1.289010352421891e+173, 2.0856625620690997e+173, 3.3746729144909907e+173, 5.46033547656009e+173, 8.83500839105108e+173, 1.429534386761117e+174, 2.313035225866225e+174, 3.742569612627342e+174, 6.055604838493567e+174, 9.79817445112091e+174, 1.5853779289614475e+175, 2.5651953740735385e+175, 4.150573303034986e+175, 6.715768677108524e+175, 1.0866341980143511e+176, 1.7582110657252035e+176, 2.8448452637395545e+176, 4.603056329464758e+176, 7.447901593204313e+176, 1.205095792266907e+177, 1.9498859515873383e+177, 3.1549817438542456e+177, 5.104867695441584e+177, 8.25984943929583e+177, 1.3364717134737413e+178, 2.1624566574033242e+178, 3.498928370877066e+178, 5.6613850282803905e+178, 9.160313399157456e+178, 1.4821698427437848e+179, 2.3982011826595303e+179, 3.880371025403315e+179, 6.278572208062845e+179, 1.0158943233466161e+180, 1.6437515441529006e+180, 2.6596458674995166e+180, 4.303397411652417e+180, 6.963043279151934e+180, 1.126644069080435e+181, 1.8229483969956285e+181, 2.9495924660760636e+181, 4.772540863071692e+181, 7.722133329147755e+181, 1.2494674192219447e+182, 2.0216807521367203e+182, 3.271148171358665e+182, 5.2928289234953855e+182, 8.56397709485405e+182, 1.3856806018349436e+183, 2.2420783113203486e+183, 3.627758913155292e+183, 5.869837224475641e+183, 9.497596137630933e+183, 1.5367433362106574e+184, 2.4865029499737505e+184, 4.023246286184408e+184, 6.509749236158159e+184, 1.0532995522342567e+185, 1.7042744758500726e+185, 2.757574028084329e+185, 4.461848503934402e+185, 7.219422532018732e+185, 1.1681271035953133e+186, 1.8900693567971865e+186, 3.0581964603925e+186, 4.948265817189686e+186, 8.006462277582186e+186, 1.2954728094771872e+187, 2.096119037235406e+187, 3.391591846712593e+187, 5.487710883947999e+187, 8.879302730660591e+187, 1.436701361460859e+188, 2.324631634526918e+188, 3.761332995987777e+188, 6.085964630514695e+188, 9.847297626502471e+188, 1.5933262257017168e+189, 2.578055988351964e+189, 4.1713822140536807e+189, 6.749438202405644e+189, 1.0920820416459324e+190, 1.7670258618864968e+190, 2.859107903532429e+190, 4.626133765418926e+190, 7.485241668951356e+190, 1.211137543437028e+191, 1.9596617103321636e+191, 3.170799253769192e+191, 5.130460964101355e+191, 8.301260217870547e+191, 1.34317211819719e+192, 2.1732981399842448e+192, 3.5164702581814347e+192, 5.689768398165679e+192, 9.206238656347114e+192, 1.4896007054512793e+193, 2.4102245710859905e+193, 3.89982527653727e+193, 6.310049847623261e+193, 1.020987512416053e+194, 1.651992497178379e+194, 2.6729800095944324e+194, 4.324972506772811e+194, 6.997952516367244e+194, 1.1322925023140055e+195, 1.8320877539507298e+195, 2.964380256264735e+195, 4.796468010215465e+195, 7.7608482664802e+195, 1.2557316276695666e+196, 2.0318164543175863e+196, 3.287548081987153e+196, 5.31936453630474e+196, 8.606912618291892e+196, 1.3926277154596632e+197, 2.2533189772888524e+197, 3.645946692748516e+197, 5.899265670037368e+197, 9.545212362785885e+197, 1.5444478032823252e+198, 2.4989690395609137e+198, 4.0434168428432386e+198, 6.542385882404152e+198, 1.058580272524739e+199, 1.7128188607651542e+199, 2.771399133289893e+199, 4.484217994055047e+199, 7.25561712734494e+199, 1.1739835121399988e+200, 1.8995452248744928e+200, 3.073528737014492e+200, 4.9730739618889846e+200, 8.046602698903476e+200, 1.301967666079246e+201, 2.1066279359695935e+201, 3.4085956020488395e+201, 5.515223538018433e+201, 8.923819140067273e+201, 1.4439042678085704e+202, 2.3362861818152977e+202, 3.780190449623868e+202, 6.116476631439166e+202, 9.896667081063034e+202, 1.6013143712502202e+203, 2.5909810793565236e+203, 4.192295450606744e+203, 6.783276529963268e+203, 1.0975571980570012e+204, 1.775884851053328e+204, 2.873442049110329e+204, 4.649326900163657e+204, 7.522768949273986e+204, 1.2172095849437642e+205, 1.9694864798711628e+205, 3.186696064814927e+205, 5.15618254468609e+205, 8.342878609501017e+205, 1.3499061154187107e+206, 2.1841939763688122e+206, 3.534100091787523e+206, 5.718294068156335e+206, 9.252394159943859e+206, 1.4970688228100194e+207, 2.4223082388044054e+207, 3.919377061614425e+207, 6.34168530041883e+207, 1.0261062362033255e+208, 1.6602747662452085e+208, 2.686381002448534e+208, 4.346655768693743e+208, 7.0330367711422765e+208, 1.137969253983602e+209, 1.8412729310978296e+209, 2.9792421850814316e+209, 4.820515116179261e+209, 7.799757301260693e+209, 1.2620272417439954e+210, 2.0420029718700645e+210, 3.3040302136140597e+210, 5.346033185484125e+210, 8.650063399098184e+210, 1.3996096584582308e+211, 2.264615998368049e+211, 3.66422565682628e+211, 5.92884165519433e+211, 9.59306731202061e+211, 1.552190896721494e+212, 2.511497627923555e+212, 4.0636885246450485e+212, 6.575186152568604e+212, 1.0638874677213652e+213, 1.7214060829782255e+213, 2.785293550699591e+213, 4.506699633677816e+213, 7.291993184377408e+213, 1.1798692818055224e+214, 1.9090686002432632e+214, 3.0889378820487856e+214, 4.998006482292049e+214, 8.086944364340835e+214, 1.3084950846632884e+215, 2.117189521097372e+215, 3.4256846057606605e+215, 5.5428741268580325e+215, 8.968558732618692e+215, 1.4511432859476725e+216, 2.3479991592095418e+216, 3.7991424451572143e+216, 6.147141604366756e+216, 9.94628404952397e+216, 1.6093425653890728e+217, 2.6039709703414695e+217, 4.2133135357305423e+217, 6.817284506072012e+217, 1.1030598041802554e+218, 1.7847882547874567e+218, 2.887848058967712e+218, 4.672636313755169e+218, 7.560484372722881e+218, 1.223312068647805e+219, 1.9793605059200933e+219, 3.2026725745678985e+219, 5.182033080487992e+219, 8.384705655055891e+219, 1.3566738735543884e+220, 2.1951444390599775e+220, 3.551818312614366e+220, 5.746962751674343e+220, 9.298781064288708e+220, 1.5045743815963052e+221, 2.4344524880251762e+221, 3.939026869621482e+221, 6.373479357646658e+221, 1.0312506227268139e+222, 1.6685985584914795e+222, 2.6998491812182934e+222, 4.368447739709773e+222, 7.068296920928067e+222, 1.143674466063784e+223, 1.8505041581565907e+223, 2.9941786242203746e+223, 4.844682782376966e+223, 7.83886140659734e+223, 1.2683544188974306e+224, 2.0522405595571645e+224, 3.3205949784545953e+224, 5.37283553801176e+224, 8.693430516466355e+224, 1.4066266054478115e+225, 2.275969657094447e+225, 3.6825962625422585e+225, 5.958565919636706e+225, 9.641162182178965e+225, 1.559972810181567e+226, 2.5240890283994634e+226, 4.084061838581031e+226, 6.608150866980494e+226, 1.0692212705561525e+227, 1.7300363572542018e+227, 2.7992576278103543e+227, 4.529293985064556e+227, 7.32855161287491e+227, 1.1857845597939466e+228, 1.9186397210814375e+228, 3.104424280875384e+228, 5.023064001956822e+228, 8.127488282832206e+228, 1.3150552284789027e+229, 2.1278040567621232e+229, 3.4428592852410256e+229, 5.570663342003149e+229, 9.013522627244175e+229, 1.4584185969247324e+230, 2.35977085964915e+230, 3.818189456573882e+230, 6.177960316223032e+230, 9.996149772796915e+230, 1.6174110089019948e+231, 2.6170259861816863e+231, 4.234436995083681e+231, 6.851462981265368e+231, 1.1085899976349048e+232, 1.7937362957614417e+232, 2.9023262933963465e+232, 4.696062589157788e+232, 7.598388882554135e+232, 1.2294451471711922e+233, 1.9892840354266056e+233, 3.218729182597798e+233, 5.208013218024404e+233, 8.426742400622202e+233, 1.3634755618646606e+234, 2.206149801926881e+234, 3.569625363791541e+234, 5.775775165718422e+234, 9.345400529509963e+234, 1.5121175695228387e+235, 2.446657622473835e+235, 3.958775191996674e+235, 6.405432814470509e+235, 1.0364208006467183e+236, 1.6769640820937692e+236, 2.7133848827404875e+236, 4.390348964834257e+236, 7.103733847574745e+236, 1.1494082812409e+237, 1.8597816659983745e+237, 3.0091899472392745e+237, 4.868971613237649e+237, 7.878161560476924e+237, 1.2747133173714572e+238, 2.0625294734191497e+238, 3.337242790790607e+238, 5.399772264209757e+238, 8.737015055000364e+238, 1.4136787319210122e+239, 2.287380237421049e+239, 3.701058969342061e+239, 5.98843920676311e+239, 9.689498176105172e+239, 1.5677937382868282e+240, 2.5367435558973453e+240, 4.1045372941841735e+240, 6.641280850081519e+240, 1.0745818144265692e+241, 1.738709899434721e+241, 2.8132917138612906e+241, 4.552001613296012e+241, 7.365293327157303e+241, 1.1917294940453315e+242, 1.9282588267610618e+242, 3.119988320806393e+242, 5.048247147567455e+242, 8.168235468373848e+242, 1.3216482615941302e+243, 2.138471808431515e+243, 3.4601200700256455e+243, 5.59859187845716e+243, 9.058711948482806e+243, 1.4657303826939964e+244, 2.371601577542277e+244, 3.8373319602362735e+244, 6.208933537778551e+244, 1.0046265498014824e+245, 1.6255199035793374e+245, 2.63014645338082e+245, 4.255666356960157e+245, 6.885812810340977e+245, 1.1141479167301135e+246, 1.802729197764211e+246, 2.9168771144943245e+246, 4.7196063122585356e+246, 7.63648342675286e+246, 1.2356089739011395e+247, 1.9992573165764253e+247, 3.2348662904775646e+247, 5.23412360705399e+247, 8.468989897531554e+247, 1.3703113504585544e+248, 2.2172103402117098e+248, 3.5875216906702645e+248, 5.804732030881975e+248, 9.39225372155224e+248, 1.5196985752434214e+249, 2.4589239473986454e+249, 3.978622522642067e+249, 6.437546470040712e+249, 1.0416168992682779e+250, 1.685371546272349e+250, 2.7269884455406272e+250, 4.4123599918129767e+250, 7.139348437353604e+250, 1.155170842916658e+251, 1.8691056866520183e+251, 3.024276529568676e+251, 4.893382216220695e+251, 7.917658745789371e+251, 1.2811040962010066e+252, 2.0728699707799435e+252, 3.35397406698095e+252, 5.4268440377608935e+252, 8.780818104741844e+252, 1.4207662142502737e+253, 2.298848024724458e+253, 3.719614238974731e+253, 6.01846226369919e+253, 9.738076502673921e+253, 1.575653876637311e+254, 2.549461526904703e+254, 4.125115403542014e+254, 6.674576930446717e+254, 1.079969233398873e+255, 1.7474269264435447e+255, 2.827396159842418e+255, 4.574823086285962e+255, 7.40221924612838e+255, 1.1977042332414342e+256, 1.937926157854272e+256, 3.135630391095706e+256, 5.073556548949979e+256, 8.209186940045685e+256, 1.3282743488995665e+257, 2.149193042904135e+257, 3.4774673918037014e+257, 5.626660434707837e+257, 9.104127826511539e+257, 1.4730788261219376e+258, 2.3834916087730915e+258, 3.856570434895029e+258, 6.24006204366812e+258, 1.0096632478563149e+259, 1.633669452223127e+259, 2.643332700079442e+259, 4.277002152302569e+259, 6.920334852382011e+259, 1.119733700468458e+260, 1.811767185706659e+260, 2.9315008861751174e+260, 4.7432680718817765e+260, 7.674768958056894e+260, 1.2418037029938671e+261, 2.0092805987995564e+261, 3.2510843017934235e+261, 5.26036490059298e+261, 8.511449202386403e+261, 1.3771814102979384e+262, 2.2283263305365785e+262, 3.6055077408345165e+262, 5.833834071371095e+262, 9.439341812205611e+262, 1.5273175883576705e+263, 2.4712517695782316e+263, 3.998569357935902e+263, 6.469821127514133e+263, 1.0468390485450036e+264, 1.6938211612964169e+264, 2.7406602098414205e+264, 4.434481371137837e+264, 7.175141580979258e+264, 1.1609622952117095e+265, 1.8784764533096354e+265, 3.0394387485213448e+265, 4.9179152018309806e+265, 7.957353950352325e+265, 1.2875269152183306e+266, 2.083262310253563e+266, 3.3707892254718936e+266, 5.454051535725457e+266, 8.82484076119735e+266, 1.4278892296922807e+267, 2.3103733058120157e+267, 3.7382625355042964e+267, 6.048635841316312e+267, 9.786898376820609e+267, 1.5835534218136922e+268, 2.5622432594957532e+268, 4.145796681309445e+268, 6.708039940805197e+268, 1.0853836622114642e+269, 1.756187656291984e+269, 2.841571318503448e+269, 4.597758974795432e+269, 7.43933029329888e+269, 1.2037089268094313e+270, 1.9476419561393193e+270, 3.151350882948751e+270, 5.0989928390880705e+270, 8.250343722036821e+270, 1.3349336561124892e+271, 2.159968028316171e+271, 3.4949016844286605e+271, 5.654869712744832e+271, 9.149771397173493e+271, 1.4804641109918323e+272, 2.3954412507091816e+272, 3.875905361701014e+272, 6.271346612410196e+272, 1.014725197411121e+273, 1.6418598586521405e+273, 2.6565850560632613e+273, 4.298444914715402e+273, 6.955029970778663e+273, 1.1253474885494065e+274, 1.8208504856272727e+274, 2.946197974176679e+274, 4.7670484598039515e+274, 7.713246433980631e+274, 1.2480294893784583e+275, 2.0193541327765214e+275, 3.2673836221549794e+275, 5.286737754931501e+275, 8.55412137708648e+275, 1.3840859132017982e+276, 2.2394980509104464e+276, 3.6235839641122446e+276, 5.863082015022691e+276, 9.486665979134936e+276, 1.5349747994157627e+277, 2.4836413973292562e+277, 4.0186161967450185e+277, 6.502257594074275e+277, 1.0520873790819292e+278, 1.7023131384893566e+278, 2.754400517571286e+278, 4.4567136560606425e+278, 7.211114173631929e+278, 1.1667827829692572e+279, 1.8878942003324502e+279, 3.054676983301707e+279, 4.942571183634157e+279, 7.997248166935864e+279, 1.2939819350570022e+280, 2.0937067517505885e+280, 3.3876886868075906e+280, 5.4813954385581795e+280, 8.869084125365771e+280, 1.435047956392395e+281, 2.321956368928972e+281, 3.757004325321367e+281, 6.078960694250339e+281, 9.835965019571706e+281, 1.5914925713822045e+282, 2.575089073339375e+282, 4.1665816447215794e+282, 6.741670718060955e+282, 1.0908252362782534e+283, 1.7649923080843489e+283, 2.855817544362602e+283, 4.620809852446951e+283, 7.476627396809553e+283, 1.2097437249256505e+284, 1.957406464606606e+284, 3.1671501895322564e+284, 5.124556654138862e+284, 8.291706843671119e+284, 1.3416263497809983e+285, 2.1707970341481102e+285, 3.5124233839291085e+285, 5.683220418077219e+285, 9.195643802006327e+285, 1.4878864220083546e+286, 2.4074508022089873e+286, 3.895337224217342e+286, 6.302788026426329e+286, 1.019812525064367e+287, 1.650091327707e+287, 2.6699038527713674e+287, 4.3199951804783675e+287, 6.989899033249734e+287, 1.1309894213728102e+288, 1.8299793246977837e+288, 2.960968746070594e+288, 4.790948070768378e+288, 7.751916816838971e+288, 1.254286488760735e+289, 2.029478170444632e+289, 3.283764659205367e+289, 5.313242829649999e+289, 8.597007488855366e+289, 1.3910250318505364e+290, 2.250725780736073e+290, 3.641750812586609e+290, 5.892476593322682e+290, 9.53422740590929e+290, 1.5426703999231972e+291, 2.496093140514126e+291, 4.038763540437323e+291, 6.53485668095145e+291, 1.0573620221388773e+292, 1.7108476902340223e+292, 2.7682097123728997e+292, 4.479057402606922e+292, 7.247267114979821e+292, 1.1726324517586743e+293, 1.8973591632566564e+293, 3.0699916150153306e+293, 4.967350778271987e+293, 8.037342393287317e+293, 1.3004693171559304e+294, 2.104203556484662e+294, 3.4046728736405925e+294, 5.508876430125255e+294, 8.913549303765847e+294, 1.4422425733891103e+295, 2.333597503765695e+295, 3.7758400771548054e+295, 6.109437580920501e+295, 9.885277658075306e+295, 1.5994715238995807e+296, 2.5879992897071113e+296, 4.187470813606692e+296, 6.775470103313804e+296, 1.0962940916920496e+297, 1.77384110202343e+297, 2.870135193715479e+297, 4.643976295738909e+297, 7.514111489454388e+297, 1.2158087785193297e+298, 1.9672199274647685e+298, 3.1830287059840983e+298, 5.150248633448867e+298, 8.333277339432965e+298, 1.3483525972881832e+299, 2.1816803312314797e+299, 3.530032928519663e+299, 5.7117132597511424e+299, 9.241746188270806e+299, 1.495345944802195e+300, 2.4195205636292755e+300, 3.9148665084314706e+300, 6.334387072060746e+300, 1.0249253580492217e+301, 1.6583640652552963e+301, 2.6832894233045177e+301, 4.341653488559814e+301, 7.0249429118643315e+301, 1.1366596400424146e+302, 1.839153931228848e+302, 2.9758135712712625e+302, 4.81496750250011e+302, 7.790781073771373e+302, 1.2605748576271483e+303, 2.0396529650042858e+303, 3.300227822631434e+303, 5.3398807876357195e+303, 8.640108610267153e+303, 1.3979989397902873e+304, 2.2620098008170023e+304, 3.66000874060729e+304, 5.922018541424292e+304, 9.582027282031581e+304, 1.5504045823455874e+305, 2.5086073105487455e+305, 4.059011892894333e+305, 6.567619203443078e+305, 1.062663109633741e+306, 1.7194250299780488e+306, 2.78208813961179e+306, 4.501513169589839e+306, 7.283601309201629e+306, 1.1785114478791467e+307, 1.9068715787993096e+307, 3.085383026678456e+307, 4.992254605477766e+307, 8.077637632156222e+307, 1.3069892237633987e+308, Infinity";
  }
}
