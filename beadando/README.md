# Dokumentáció
##Koktél receptek
Készítette: Peknyó Szilvia

###1.	Követelményanalízis

#####1.1.	Célkitűzés, projektindító dokumentum
A program legfőbb célja jól átláthatóan, és érthetően megjeleníteni az adott koktélok, és italok főbb tulajdonságait, és receptjüket egy webes vastagkliens, azaz egyoldali alkalmazás felhasználásával. A felhasználó a koktélok listáját megtekintheti, bővítheti, meglévő elemeket törölhet, valamint megjegyzéseket írhat.

######Funkcionális követelmények:
* új ital felvételére a listába
* a meglévő italok megtekintése
* a meglévő italok szerkesztésére
* a meglévő italok törlésére
* komment írása

######Nem funkcionális követelmények:
*	**Használhatóság:** Könnyű áttekinthetőség, ésszerű elrendezés, könnyen kezelhetőség
*	**Megbízhatóság:** Hibásan bevitt adatok esetén a program jól láthatóan jelezzen a felhasználónak, és emelje ki a hibás beviteli mezőket. A jól bevitt adatok maradjanak az űrlapban.
*	**Karbantarthatóság:** könnyen lehessen bővíteni, a különböző típusú fájlok külön csoportosítva, ésszerűen legyenek felbontva, a könnyebb fejleszthetőség miatt

#####1.2.	Szakterületi fogalomjegyzék
**Fajták:**
* **Shot:** Felespohárban felszolgált, gyakran csak alkoholt tartalmazó ital.
* **Cocktail:** Koktélos pohárban, szirupokkal, gyömülcslevekkel készített ital.
* **Long drink:** Egyszerű long-os pohárban felszolgált ital, gyakran egy fajta alkoholt és üdítőt tartalmaz.
* **Aperitif:** Étkezések előtt, étvágy fokozás céljából fogyasztott ital.

**Alap ital:** A koktélban legnagyobb arányban részt vevő tömény alkohol.

**Long-os pohár:** Nagy méretű koktélos pohár, amely egy vizespohárhoz hasonlít.

#####1.3.	Használatieset-modell, funkcionális követelmények

**Felhasználók**:

*	Új recept felvétele
*	Meglévő recept megtekintése
*	Meglévő recept szerkesztése
*	Meglévő recept törlése
*	Komment írása

![](images/esetdiagram.png)

Vegyünk példának egy egyszerű folyamatot:

**Meglévő recept szerkesztése:**

1.	A felhasználó az oldalra érkezve megtekintheti a recepteket listázó oldalt, ahol kiválaszthatja a szerkeszteni kívánt receptet.
2.	Megnyomja a „Szerkesztés” feliratú gombot
3.	Szerkesztés oldalon felviszi az új adatokat
4.	Submit gombra kattintva elmenti a változásokat

![](images/foly-leiro-esetdiag.png)

###2.	Tervezés

#####2.1.	Architektúra terv

######2.1.1. Komponensdiagram

######2.1.2. Oldaltérkép:

**Felhasználó:**
* Főoldal
* Új koktél felvétele
* Listaoldal
  * Koktél törlése 
  * Koktél megtekintése
    * Komment hozzáfűzése
  * Koktél szerkesztése 

######2.1.3. Végpontok



#####2.2. Felhasználói-felület modell

######2.2.1.Oldalvázlatok:
**Főoldal**

![](images/kepernyokep/index_terv.jpg)

**Koktél listaoldal**

![](images/kepernyokep/list_terv.jpg)

**Új koktél felvétele**

![](images/kepernyokep/new_terv.jpg)

**Koktél megtekintése**

![](images/kepernyokep/megtekint_terv.jpg)

######2.2.2.Designtervek (végső megvalósítás kinézete):

**Főoldal**

![](images/kepernyokep/index.jpg)

**Koktél listaoldal**

![](images/kepernyokep/list.jpg)

**Új koktél felvétele**

![](images/kepernyokep/new.jpg)

**Koktél megtekintése**

![](images/kepernyokep/megtekint.jpg)

######2.2.3. Osztálymodell

 **Adatmodell**
 
 ![](images/adatmodell.png)
 
 **Adatbázisterv**
 
 ![](images/adatbazisterv.png)
 
######2.2.4.  Dinamikus működés

 **Szekvenciadiagram**
 
 Vegyük példának egy új elem felvételét, mindezt szekvenciadiagrammon.
 
 ![](images/szekvencia.jpg)

###3.	Implementáció
######3.1.1. Fejlesztőkörnyezet

Webes IDE: **Cloud9**

* Github account szükséges
* Belépés után új workspace létrehozása (node.js)
* Ezután elkezdhetjük a kód írását
* _git add <fajlnev>_ paranccsal kiválaszthatunk egy fájlt verzionálásra, vagy _git add ._ paranccsal az összes fájlt kiválaszthatjuk
* _git commit -m "commit"_ paranccsal feltehetjük a fájlokat a cloud9 helyi tárolójába. Az így megjelölt verziókhoz a későbbiekben visszatérhetünk, különbségüket megtekinthetjük.
* _git push origin master_ paranccsal a lokális tárolóból feltölthetjük a tartalmat a Github-ra.
* Végezetül a Github oldalán leellenőrizhetjük a munkánkat.

######3.1.2. Könyvtárstruktúra, funkciók
###4.	Tesztelés
#####4.1. Tesztelési környezetek

#####4.2. Egységteszt
#####4.3. Funkciónális teszetelés
#####4.4.Tesztesetek
###5.	Felhasználói dokumentáció

**Futtatáshoz szükséges operációs rendszer:** Tetszőleges operációs rendszer

**A futtatáshoz szükséges hardver:** Operációs rendszerek szerint megadva

**Egyéb követelmények:** Internet böngésző telepítése, JavaScript ajánlott

**Program használata:**

1. Böngészőben nyissuk meg a főoldalt
2. Jobb felső sarokban kattintsunk a Bejelentkezés feliratra
3. Bejelentkezés/Regisztráció után a Lista oldalra jutunk
4. Bal alsó sarokban az Új recept felvitele gombra kattintva tudunk új recepteket felvenni a listába
5. Töltsük ki az űrlapot
6. Hibás adatok esetén az űrlap jelezni fogja a hibát
7. Submit gombra kattintva mentsük el az adatokat
8. Lista oldalon: Törlés gombra kattintva törölhetjük a receptet
9. Lista oldalon: Megtekint gombra kattintva a megtekintés oldalra jutunk
10. Megtekintés oldalon található a szerkesztés gomb, és a komment írása funkció
11. Szerkesztés oldal: megegyezik az új recept felvitel funkcióval, csak előre láthatóak benne a recept eddigi adatai

###6.	Irodalomjegyzék:

http://webprogramozas.inf.elte.hu/alkfejl.php

http://ade.web.elte.hu/wabp/lecke2_lap1.html

http://webprogramozas.inf.elte.hu/alkfejl/A_dokumentacio_felepitese.pdf
