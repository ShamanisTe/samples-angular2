export const TRANSLATION = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE messagebundle [
<!ELEMENT messagebundle (msg)*>
<!ATTLIST messagebundle class CDATA #IMPLIED>

<!ELEMENT msg (#PCDATA|ph|source)*>
<!ATTLIST msg id CDATA #IMPLIED>
<!ATTLIST msg seq CDATA #IMPLIED>
<!ATTLIST msg name CDATA #IMPLIED>
<!ATTLIST msg desc CDATA #IMPLIED>
<!ATTLIST msg meaning CDATA #IMPLIED>
<!ATTLIST msg obsolete (obsolete) #IMPLIED>
<!ATTLIST msg xml:space (default|preserve) "default">
<!ATTLIST msg is_hidden CDATA #IMPLIED>

<!ELEMENT source (#PCDATA)>

<!ELEMENT ph (#PCDATA|ex)*>
<!ATTLIST ph name CDATA #REQUIRED>

<!ELEMENT ex (#PCDATA)>
]>
<messagebundle>
  <msg id="e4d573bc98bfd3b14f674592d7e626bd4e0286cc">Bonjour à tous depuis i18n!</msg>
  <msg id="de18b431a067310d007a8c4fc1d28e8422f7421d" desc="this is a state of my body" meaning="i want to eat a poney">I&apos;m hungry</msg>
  <msg id="2460653d8594a2ae84256125b877b44d7c586c9e">no HTML tag</msg>
  <msg id="ae282a00a60dafbf3a766bba7aa350d036fbd1c3">params with nbPersons : <ph name="INTERPOLATION"/></msg>
  <msg id="39dc244ff4519b66a160ddd8a4f24a7c90cffe3e">
    <ph name="ICU"/>
  </msg>
  <msg id="0d5287f9affdaf3b4e9f36f87cb8479dae21c2fd">{
      nbPersons, plural, =0 {no person } =1 {only one person} =2 {two persons } other {too much: (<ph name="INTERPOLATION"/>) } }</msg>
</messagebundle>`;