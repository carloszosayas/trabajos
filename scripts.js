var LeerDat = function(){ 
    let exas=[], dectem=[], hexad=[];
    var add=1112, subs=1624, andi=1104, cbzs=180, cbnzs=181, ldurs=1986, sturs=1984, bls=37, brs=1712, bs=5;
    var cad1 = document.getElementById("abstract").value;
    console.log(cad1);
    var saltos=1, cad6,cad7,cad8, tam2,ente1,num2, num3;
    for (var i = 0; i < cad1.length; i++) {
    	if (cad1[i]=="\n") {
    		saltos++;
    	}
    }
    var cad2 = cad1.split("\n");//parte por renglones
    for(var j=0; j<saltos;j++){
    	var cad3 = cad2[j];//contiene el primer renglon completo
    	var cad4 = cad3.split(" ");//parte un renglon por espacios
    	var tam=cad4[0].length;//tamano de la primer cadena para ver si es etiqueta
    	var cad5=cad4[0]
    	if (cad5[tam-1]==":"){
			switch (cad4[1]){
				case "B":   exas+=0;
				  			exas+=0;
				  			exas+=0;
				            exas+=(bs.toString(2))//codigo de instruccion a bin
    						cad8=cad4[2];
    						cad8+=':';
    						var tam9, conts=0, cad9, cad11, band=0;
                            for (var i = 0; i < saltos; i++) {
                                cad9=cad2[i].split(" ");
                                cad11=cad9[0];
                            	if (cad8!=cad11) {
                            		conts++;//saltos que realiza
                            	}
                            	else
                            		break;
                            }
                            var binr=conts.toString(2);//binario de los saltos
                            var tam3=binr.length;
                            var dif=26-tam3;
                            for(var r=0; r< dif;r++){
                            	exas+=0;
                            }
                            var binr=conts.toString(2);//binario de los saltos
                            exas+=binr;
                            dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
                            console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
            	case "ADD": exas+=(add.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[4];//RM
                        	num2=sinlet(cad6);//RM
                        	num2=num2.toString(2);
                            var tam5=num2.length;
                            var dif1=5-tam5;
                            for(var r=0; r< dif1;r++){
                            	exas+=0;
                            }
                        	exas+=num2;//SE AGREGA AL VETOR
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	cad7=cad4[3];
                        	num3=sinlet(cad7);//RN
                            num3=num3.toString(2);
                            tam5=num3.length;
                            dif1=5-tam5;
                            for(var r=0; r< dif1;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	cad7=cad4[2];//RD
                        	num3=sinlet(cad7);
							num3=num3.toString(2);
							tam5=num3.length;
							dif1=5-tam5;
							for(var r=0; r< dif1;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
							
                    break;
                case "SUB":exas+=(subs.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[4];//RM
                        	num2=sinlet(cad6);//RM
                            num2=num2.toString(2);
                        	var tam6=num2.length;
                        	var dif3=5-tam6;
                        	for(var r=0; r< dif3;r++){
                            	exas+=0;
                            }
                        	exas+=num2//SE AGREGA AL VETOR
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	cad7=cad4[3];
                        	num3=sinlet(cad7);//RN
                        	num3=num3.toString(2);
                            tam6=num3.length;
                            dif3=5-tam6;
                            for(var r=0; r< dif3;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	cad7=cad4[2];//RD
                        	num3=sinlet(cad7);
                        	num3=num3.toString(2);
                            tam6=num3.length;
                            dif3=5-tam6;
                            for(var r=0; r< dif3;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "AND":exas+=(andi.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[4];//RM
                        	num2=sinlet(cad6);//RM
                        	num2=num2.toString(2);
        					var tam7=num2.length;
        					var dif5=5-tam7;
        					for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num2;//SE AGREGA AL VETOR
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	cad7=cad4[3];
                        	num3=sinlet(cad7);//RN
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	cad7=cad4[2];
                        	num3=sinlet(cad7);
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "CBZ":exas+=(cbzs.toString(2))//codigo de instruccion a bin
    						cad8=cad4[3];
    						cad8+=':';
    						var conts=0, cad9, band=0;
                            for (var i = j; i < saltos; i++) {
                                cad9=cad2[i].split(" ");
                                cad11=cad9[0];
                            	if (cad8!=cad11) {
                            		conts++;//saltos que realiza
                            	}
                            	else{
                            		break;

                            	}
                            }
                            if(cad8!=cad11){
                            	band=1
                            	conts=0;
                            	for (var i = j; i>=0; i--) {
                                	cad9=cad2[i].split(" ");
                                	cad11=cad9[0];
                            		if (cad8!=cad11) {
                            			conts++;//saltos que realiza
                            		}
                            		else
                            			break;
                            	}
                            }
                            if(band==1){
                            	var tam12, ban2=1;
                            	let auxi=[], auxi2=[], auxi3=[];
                            	conts=conts.toString(2);
                            	var tam11=conts.length;
                            	tam12=tam11;
                            	tam11=19-tam11;//checar el complemeto a dos
                            	for (var i = 0; i < tam11; i++) {
                            		auxi+=0;
                            	}
                            	auxi+=conts;
                            	for (var i = 0; i < 19; i++) {
                            		if (auxi[i]==1) {
                            			auxi2+=0;
                            		}
                            		else
                            			auxi2+=1;
                            	}
                            	for (var i = 18; i >=0 ; i--) {
                            		if (auxi2[i]==1 && ban2==1) {
                            				ban2=1;
                            				auxi3+=0;	
                            		}
                            		else{
                            			if (ban2==1) {
                            				auxi3+=1;
                            				ban2=0;
                            			}
                            			else
                            				auxi3+=auxi2[i]
                            		}
                            	}
                            	for (var i = 18; i >=0 ; i--) {
                            		exas+=auxi3[i];
                            	}
                            }
                            else{
                            	var binr=conts.toString(2);//binario de los saltos
                            	var tam3=binr.length;
                            	var dif=19-tam3;
                            	for(var r=0; r< dif;r++){
                            		exas+=0;
                            	}
                            	exas+=binr;
                            }
                            num2=sinlet(cad4[2]);
                            num2=num2.toString(2);
                            tam3=num2.length;
                            var tam4=5-tam3;
                            for(var r=0; r< tam4;r++){
                            	exas+=0;
                            }
                            exas+=num2;
                            dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
                            console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "CBNZ":exas+=(cbnzs.toString(2))//codigo de instruccion a bin
    						cad8=cad4[3];
    						cad8+=':'
    						var conts=0, band=0, cad9, cad11;
                            for (var i = j; i < saltos; i++) {
                                cad9=cad2[i].split(" ");
                                cad11=cad9[0];
                            	if (cad8!=cad11) {
                            		conts++;//saltos que realiza
                            	}
                            	else
                            		break;
                            }
                            if(cad8!=cad11){
                            	band=1;
                            	conts=0;
                            	for (var i = j; i>=0; i--) {
                                	cad9=cad2[i].split(" ");
                                	cad11=cad9[0];
                            		if (cad8!=cad11) {
                            			conts++;//saltos que realiza
                            		}
                            		else
                            			break;
                            	}
                            }
                            if(band==1){
                            	var tam12, ban2=1;
                            	let auxi=[], auxi2=[], auxi3=[];
                            	conts=conts.toString(2);
                            	var tam11=conts.length;
                            	tam12=tam11;
                            	tam11=19-tam11;//checar el complemeto a dos
                            	for (var i = 0; i < tam11; i++) {
                            		auxi+=0;
                            	}
                            	auxi+=conts;
                            	for (var i = 0; i < 19; i++) {
                            		if (auxi[i]==1) {
                            			auxi2+=0;
                            		}
                            		else
                            			auxi2+=1;
                            	}
                            	for (var i = 18; i >=0 ; i--) {
                            		if (auxi2[i]==1 && ban2==1) {
                            				ban2=1;
                            				auxi3+=0;	
                            		}
                            		else{
                            			if (ban2==1) {
                            				auxi3+=1;
                            				ban2=0;
                            			}
                            			else
                            				auxi3+=auxi2[i]
                            		}
                            	}
                            	for (var i = 18; i >=0 ; i--) {
                            		exas+=auxi3[i];
                            	}
                            }
                            else{
                            	var binr=conts.toString(2);//binario de los saltos
                            	var tam3=binr.length;
                            	var dif=19-tam3;
                            	for(var r=0; r< dif;r++){
                            		exas+=0;
                            	}
                            	exas+=binr;
                            }
                            num2=sinlet(cad4[2]);
                            num2=num2.toString(2);
                            tam3=num2.length;
                            var tam4=5-tam3;
                            for(var r=0; r< tam4;r++){
                            	exas+=0;
                            }
                            exas+=num2;
                            dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
                            console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;	
    			case "LDUR":exas+=(ldurs.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[4];//ADDRES
                        	num2=sinlet(cad6);//
                        	num2=num2.toString(2);
        					var tam7=num2.length;
        					var dif5=9-tam7;
        					for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num2;//SE AGREGA AL VETOR
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	cad7=cad4[3];//RN
                        	num3=sinlet(cad7);//RN
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	cad7=cad4[2];//RT
                        	num3=sinlet(cad7);
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "STUR":exas+=(sturs.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[4];//ADDRES
                        	num2=sinlet(cad6);//
                        	num2=num2.toString(2);
        					var tam7=num2.length;
        					var dif5=9-tam7;
        					for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num2;//SE AGREGA AL VETOR
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	cad7=cad4[3];//RN
                        	num3=sinlet(cad7);//RN
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	cad7=cad4[2];//RT
                        	num3=sinlet(cad7);
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "BL":exas+=(bls.toString(2))//codigo de instruccion a bin
    						cad8=cad4[2];
    						cad8+=':';
    						var tam9, conts=0, cad9, cad11, band=0;
                            for (var i = 0; i < saltos; i++) {
                                cad9=cad2[i].split(" ");
                                cad11=cad9[0];
                            	if (cad8!=cad11) {
                            		conts++;//saltos que realiza
                            	}
                            	else
                            		break;
                            }
                            var binr=conts.toString(2);//binario de los saltos
                            var tam3=binr.length;
                            var dif=26-tam3;
                            console.log(dif);
                            for(var r=0; r< dif;r++){
                            	exas+=0;
                            }
                            var binr=conts.toString(2);//binario de los saltos
                            exas+=binr;
                            dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
                            console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "BR": exas+=(brs.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[2];//RM
                        	num2=sinlet(cad6);//RM
                        	num2=num2.toString(2);
                        	let auxi=[];
                            var tam5=num2.length;
                            var dif1=5-tam5;
                            for(var r=0; r< dif1;r++){
                            	auxi+=0;
                            }
                            console.log(num2);
                        	auxi+=num2;//SE AGREGA AL VETOR
                        	console.log(auxi);
                        	for (var i = 0; i < 16; i++) {
                        		exas+=0;
                        	}
                        	exas+=auxi;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
                    break;
        	}
		}
    	else{
        	switch (cad4[0]){
        		case "B":   exas+=0;
				  			exas+=0;
				  			exas+=0;
				            exas+=(bs.toString(2))//codigo de instruccion a bin
    						cad8=cad4[1];
    						cad8+=':';
    						var tam9, conts=0, cad9, cad11, band=0;
                            for (var i = 0; i < saltos; i++) {
                                cad9=cad2[i].split(" ");
                                cad11=cad9[0];
                            	if (cad8!=cad11) {
                            		conts++;//saltos que realiza
                            	}
                            	else
                            		break;
                            }
                            var binr=conts.toString(2);//binario de los saltos
                            var tam3=binr.length;
                            var dif=26-tam3;
                            console.log(dif);
                            for(var r=0; r< dif;r++){
                            	exas+=0;
                            }
                            var binr=conts.toString(2);//binario de los saltos
                            exas+=binr;
                            dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
                            console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
            	case "ADD": exas+=(add.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[3];//RM
                        	num2=sinlet(cad6);//RM
                        	num2=num2.toString(2);
                            var tam5=num2.length;
                            var dif1=5-tam5;
                            for(var r=0; r< dif1;r++){
                            	exas+=0;
                            }
                        	exas+=num2;//SE AGREGA AL VETOR
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	cad7=cad4[2];
                        	num3=sinlet(cad7);//RN
                            num3=num3.toString(2);
                            tam5=num3.length;
                            dif1=5-tam5;
                            for(var r=0; r< dif1;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	cad7=cad4[1];//RD
                        	num3=sinlet(cad7);
							num3=num3.toString(2);
							tam5=num3.length;
							dif1=5-tam5;
							for(var r=0; r< dif1;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
                    break;
                case "SUB":exas+=(subs.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[3];//RM
                        	num2=sinlet(cad6);//RM
                            num2=num2.toString(2);
                        	var tam6=num2.length;
                        	var dif3=5-tam6;
                        	for(var r=0; r< dif3;r++){
                            	exas+=0;
                            }
                        	exas+=num2//SE AGREGA AL VETOR
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	cad7=cad4[2];
                        	num3=sinlet(cad7);//RN
                        	num3=num3.toString(2);
                            tam6=num3.length;
                            dif3=5-tam6;
                            for(var r=0; r< dif3;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	cad7=cad4[1];
                        	num3=sinlet(cad7);
                        	num3=num3.toString(2);
                            tam6=num3.length;
                            dif3=5-tam6;
                            for(var r=0; r< dif3;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "AND":exas+=(andi.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[3];//RM
                        	num2=sinlet(cad6);//RM
                        	num2=num2.toString(2);
        					var tam7=num2.length;
        					var dif5=5-tam7;
        					for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num2;//SE AGREGA AL VETOR
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	exas+=Number("0");
                        	cad7=cad4[2];
                        	num3=sinlet(cad7);//RN
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	cad7=cad4[1];
                        	num3=sinlet(cad7);
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "CBZ":exas+=(cbzs.toString(2))//codigo de instruccion a bin
    						cad8=cad4[2];
    						cad8+=':';
    						var conts=0, cad9, band=0;
                            for (var i = j; i < saltos; i++) {
                                cad9=cad2[i].split(" ");
                                cad11=cad9[0];
                            	if (cad8!=cad11) {
                            		conts++;//saltos que realiza
                            	}
                            	else{
                            		break;

                            	}
                            }
                            if(cad8!=cad11){
                            	band=1
                            	conts=0;
                            	for (var i = j; i>=0; i--) {
                                	cad9=cad2[i].split(" ");
                                	cad11=cad9[0];
                            		if (cad8!=cad11) {
                            			conts++;//saltos que realiza
                            		}
                            		else
                            			break;
                            	}
                            }
                            if(band==1){
                            	var tam12, ban2=1;
                            	let auxi=[], auxi2=[], auxi3=[];
                            	conts=conts.toString(2);
                            	var tam11=conts.length;
                            	tam12=tam11;
                            	tam11=19-tam11;//checar el complemeto a dos
                            	for (var i = 0; i < tam11; i++) {
                            		auxi+=0;
                            	}
                            	auxi+=conts;
                            	for (var i = 0; i < 19; i++) {
                            		if (auxi[i]==1) {
                            			auxi2+=0;
                            		}
                            		else
                            			auxi2+=1;
                            	}
                            	for (var i = 18; i >=0 ; i--) {
                            		if (auxi2[i]==1 && ban2==1) {
                            				ban2=1;
                            				auxi3+=0;	
                            		}
                            		else{
                            			if (ban2==1) {
                            				auxi3+=1;
                            				ban2=0;
                            			}
                            			else
                            				auxi3+=auxi2[i]
                            		}
                            	}
                            	for (var i = 18; i >=0 ; i--) {
                            		exas+=auxi3[i];
                            	}
                            }
                            else{
                            	var binr=conts.toString(2);//binario de los saltos
                            	var tam3=binr.length;
                            	var dif=19-tam3;
                            	console.log(dif);
                            	for(var r=0; r< dif;r++){
                            		exas+=0;
                            	}
                            	exas+=binr;
                            }
                            num2=sinlet(cad4[1]);
                            num2=num2.toString(2);
                            tam3=num2.length;
                            var tam4=5-tam3;
                            for(var r=0; r< tam4;r++){
                            	exas+=0;
                            }
                            exas+=num2;
                            dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
                            console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "CBNZ":exas+=(cbnzs.toString(2))//codigo de instruccion a bin
    						cad8=cad4[2];
    						cad8+=':'
    						var conts=0, band=0, cad9, cad11;
                            for (var i = j; i < saltos; i++) {
                                cad9=cad2[i].split(" ");
                                cad11=cad9[0];
                            	if (cad8!=cad11) {
                            		conts++;//saltos que realiza
                            	}
                            	else
                            		break;
                            }
                            if(cad8!=cad11){
                            	band=1;
                            	conts=0;
                            	for (var i = j; i>=0; i--) {
                                	cad9=cad2[i].split(" ");
                                	cad11=cad9[0];
                            		if (cad8!=cad11) {
                            			conts++;//saltos que realiza
                            		}
                            		else
                            			break;
                            	}
                            }
                            if(band==1){
                            	var tam12, ban2=1;
                            	let auxi=[], auxi2=[], auxi3=[];
                            	conts=conts.toString(2);
                            	var tam11=conts.length;
                            	tam12=tam11;
                            	tam11=19-tam11;//checar el complemeto a dos
                            	for (var i = 0; i < tam11; i++) {
                            		auxi+=0;
                            	}
                            	auxi+=conts;
                            	for (var i = 0; i < 19; i++) {
                            		if (auxi[i]==1) {
                            			auxi2+=0;
                            		}
                            		else
                            			auxi2+=1;
                            	}
                            	for (var i = 18; i >=0 ; i--) {
                            		if (auxi2[i]==1 && ban2==1) {
                            				ban2=1;
                            				auxi3+=0;	
                            		}
                            		else{
                            			if (ban2==1) {
                            				auxi3+=1;
                            				ban2=0;
                            			}
                            			else
                            				auxi3+=auxi2[i]
                            		}
                            	}
                            	for (var i = 18; i >=0 ; i--) {
                            		exas+=auxi3[i];
                            	}
                            }
                            else{
                            	var binr=conts.toString(2);//binario de los saltos
                            	var tam3=binr.length;
                            	var dif=19-tam3;
                            	for(var r=0; r< dif;r++){
                            		exas+=0;
                            	}
                            	exas+=binr;
                            }
                            num2=sinlet(cad4[1]);
                            num2=num2.toString(2);
                            tam3=num2.length;
                            var tam4=5-tam3;
                            for(var r=0; r< tam4;r++){
                            	exas+=0;
                            }
                            exas+=num2;
                            dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
                            console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;	
    			case "LDUR":exas+=(ldurs.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[3];//ADDRES
                        	num2=sinlet(cad6);//
                        	num2=num2.toString(2);
        					var tam7=num2.length;
        					var dif5=9-tam7;
        					for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num2;//SE AGREGA AL VETOR
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	cad7=cad4[2];//RN
                        	num3=sinlet(cad7);//RN
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	cad7=cad4[1];//RT
                        	num3=sinlet(cad7);
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "STUR":exas+=(sturs.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[3];//ADDRES
                        	num2=sinlet(cad6);//
                        	num2=num2.toString(2);
        					var tam7=num2.length;
        					var dif5=9-tam7;
        					for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num2;//SE AGREGA AL VETOR
                        	exas+=Number("0");//SHAMT
                        	exas+=Number("0");
                        	cad7=cad4[2];//RN
                        	num3=sinlet(cad7);//RN
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	cad7=cad4[1];//RT
                        	num3=sinlet(cad7);
                        	num3=num3.toString(2);
                        	tam7=num3.length;
                        	dif5=5-tam7;
                        	for(var r=0; r< dif5;r++){
                            	exas+=0;
                            }
                        	exas+=num3;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "BL":exas+=(bls.toString(2))//codigo de instruccion a bin
    						cad8=cad4[1];
    						cad8+=':';
    						var tam9, conts=0, cad9, cad11, band=0;
                            for (var i = 0; i < saltos; i++) {
                                cad9=cad2[i].split(" ");
                                cad11=cad9[0];
                            	if (cad8!=cad11) {
                            		conts++;//saltos que realiza
                            	}
                            	else
                            		break;
                            }
                            var binr=conts.toString(2);//binario de los saltos
                            var tam3=binr.length;
                            var dif=26-tam3;
                            for(var r=0; r< dif;r++){
                            	exas+=0;
                            }
                            var binr=conts.toString(2);//binario de los saltos
                            exas+=binr;
                            dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
                            console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
    				break;
    			case "BR": exas+=(brs.toString(2))//codigo de instruccion a bin
                        	cad6=cad4[1];//RM
                        	num2=sinlet(cad6);//RM
                        	num2=num2.toString(2);
                        	let auxi=[];
                            var tam5=num2.length;
                            var dif1=5-tam5;
                            for(var r=0; r< dif1;r++){
                            	auxi+=0;
                            }
                        	auxi+=num2;//SE AGREGA AL VETOR
                        	for (var i = 0; i < 16; i++) {
                        		exas+=0;
                        	}
                        	exas+=auxi;
                        	dectem=parseInt(exas, 2);
    						hexad=dectem.toString(16);
    						console.log(cad2[j]);
   							console.log(exas);
    						console.log(hexad);
    						exas=[];
    						hexad=[];
                    break;
        	}
        }
	}
   
}
function sinlet(cad){
	let num=[];
	var letr;
    for (var i = 0; i < cad.length; i++) {
        letr=cad[i];
        if (letr!='X' & letr!='[' & letr!=']' & letr!='#' & letr!=',') {
        	num.push(letr);
        }
        
    }
    return parseInt(num.join(""));
	
}