const participant = [
    { name: 'shamsa', regno: 3908, dept: 'Cs', ticket: 'normal', paymentStatus: 'Done', attandanceStatus: 'Good' },
    { name: 'Farheen', regno: 3908, dept: 'Cs', ticket: 'VIp', paymentStatus: 'Pending', attandanceStatus: 'Good' },
    { name: 'Sara', regno: 3908, dept: 'Ai', ticket: 'normal', paymentStatus: 'Done', attandanceStatus: 'Bad' },
    { name: 'Laiba', regno: 3908, dept: 'Cs', ticket: 'Vip', paymentStatus: 'Pending', attandanceStatus: 'Good' }
]


let displayDetails = participant.map((index, item, arr)=>{
    console.log(`${item.name}-${item.regno}-${item.dept}-${item.ticket}-${item.paymentStatus}-${item.attandanceStatus}`)
})
displayDetails()

let findParticipant = participant.find((val,index,arr) => {
    for (let item in participant) {
        if (item.name === val) {
            console.log(`${item.name}-${item.regno}-${item.dept}-${item.ticket}-${item.paymentStatus}-${item.attandanceStatus}`)
        }
    }
})
let getUnpaid = participant.map((indx,item,arr) => {
    let new=[]

    if(item.paymentStatus==='pending'){
        new.push(item)
    }

})
let student = participant.filter((item,reg) => item.regno === reg);
if(student){
    student.attandanceStatus='prsent'
}


