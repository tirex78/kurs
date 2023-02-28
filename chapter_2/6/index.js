
const openModal = () => {
  const userName = prompt('Введите ваше имя')
  console.log(userName)
  return (
    alert(userName),
    document.getElementById('userName').innerHTML = userName
  )
}

