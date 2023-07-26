
var namesOfPeople = [];
    //declara uma variável chamada namesOfPeople e a inicializa como uma matriz vazia. 
function submit() //código a ser executado quando o evento é acionado.
{

    // obtém o valor do elemento HTML com o ID "name1", que geralmente é um campo de entrada de texto.
    var GuestName = document.getElementById("name1").value; // O valor inserido nesse campo é armazenado na variável GuestName.
	//adiciona o valor da variável GuestName à matriz namesOfPeople:
    namesOfPeople.push(GuestName); // o método push() adiciona o nome da pessoa no final da matriz 

    console.log(GuestName); // imprime o valor da variável GuestName
        
    console.log(namesOfPeople); 

    var lenghtOfName = namesOfPeople.length;
    // obtém o comprimento da matriz namesOfPeople usando a propriedade length
    // e armazena-o na variável lenghtOfName. Essa variável contém o número de elementos na matriz.
    
    console.log(lenghtOfName);

	document.getElementById("displayName").innerHTML=namesOfPeople.toString();
    
	//Essa linha atualiza o conteúdo do elemento HTML com o ID "displayName". 
    //O conteúdo será definido como uma representação em string da matriz namesOfPeople, 
    //utilizando o método toString()
    //toString() significa que os nomes serão exibidos separados por vírgulas.
   }


   var names_of_people = [];
    
   function submit()
   {
	   var GuestName = document.getElementById("name1").value;
	   names_of_people.push(GuestName);
   
	   console.log(GuestName);
		   
	   console.log(names_of_people);
	   var lenght_of_name = names_of_people.length;
	   console.log(lenght_of_name);
	   document.getElementById("display_name").innerHTML=names_of_people.toString();
	   
	  }
   
   function sorting()
   {
	   names_of_people.sort();
	   var i= names_of_people.join("<br>");
	   console.log(names_of_people);		
	   document.getElementById("sorted").innerHTML=i.toString();
	   }
   
   function show()
   {
	   var i= names_of_people.join("<br>");
	   console.log(names_of_people);
	   document.getElementById("p1").innerHTML=i.toString();
	   document.getElementById("sort_button").style.display="block";
	   }
   
   function searching()
   {
	   var s= document.getElementById("s1").value;
	   var found=0;
	   var j;
	   for(j=0; j<names_of_people.length; j++)
		   {
			   if(s==names_of_people[j]){
				   found=found+1;
			   }	
		   }
	   document.getElementById("p2").innerHTML="name found "+found+" time/s";
	   console.log("found name "+found+" time/s");
   }
   
