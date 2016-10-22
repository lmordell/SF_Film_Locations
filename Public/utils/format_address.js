export default function formatAddress (address) {
  let formattedAddress

  let firstParam = parseInt(address[0].short_name)
  // handle case where there's number attached address
  // else handles request starting with street / district name
  if (firstParam) {
    formattedAddress = address[0].short_name + ' ' + address[1].short_name
  } else {
    formattedAddress = address[0].short_name
  }
  return formattedAddress
}
