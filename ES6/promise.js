function updateage(age){
    return new Promise((resolve,reject)=>{

        if (age>0){
            age = age +1;
            resolve(age);
        }else {
            reject('Invalid Age');
        }
    })
}

updateage(7)
    .then((updatedage)=>{
        console.log('Age updated',updatedage);
    })
    .catch((err) => {
        console.log('Age not updated');
    })

updateage(-2)
    .then((updatedage)=>{
        console.log('Age updated',updatedage);
    })
    .catch((err) => {
        console.log('Age not updated');
    })