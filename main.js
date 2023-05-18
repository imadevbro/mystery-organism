// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function to generate pAequor objects
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    // Changes one of the DNA elements at random
    mutate() {
      let indexToChange = Math.floor(Math.random() * this.dna.length);
      console.log(indexToChange);
      let newElement = returnRandBase();
      console.log(newElement);
      while(newElement === this.dna[indexToChange]) {
        newElement = returnRandBase();
      }
      this.dna[indexToChange] = newElement;
      return this.dna;
    },
    //Compares DNA of an inputted pAequor object with this pAequor object to determine similarity
    compareDNA(pAequor) {
      let identicalCount = 0;
      for(i=0; i<pAequor.dna.length; i++) {
        if(pAequor.dna[i] === this.dna[i]) {
          identicalCount++;
        }
      }
      let identicalPercent = Math.floor(identicalCount / 15 * 100);
      console.log(`Specimen ${this.specimenNum} and Specimen ${pAequor.specimentNum} have ${identicalPercent}% in common`)
    },
    //pAequor will likely survive (return true) if C and G are at least 60% of the elements
    willLikelySurvive() {
      let survivableDNA = this.dna.filter(x => x==='C' || x==='G');
      if(survivableDNA.length / this.dna.length >= 0.6) {
        return true;
      }
      else {
        return false;
      }
    }
  };
}

const randomDNA = mockUpStrand();
console.log(randomDNA);
const randomDNA2 = mockUpStrand();

//create 2 pAequor objects
const pAequor1 = pAequorFactory(1, randomDNA);
const pAequor2 = pAequorFactory(2, randomDNA2);
console.log(pAequor1);
console.log(pAequor2);

pAequor1.compareDNA(pAequor2);
console.log(pAequor1.willLikelySurvive());

//create an array with 40 pAequor objects
const pAequorArray = []
for(i=0; i<30; i++) {
  pAequorArray.push(pAequorFactory(i + 1, mockUpStrand()));
}

console.log(pAequorArray);




