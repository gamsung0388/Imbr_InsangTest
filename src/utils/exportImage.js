import html2canvas from 'html2canvas'

export const exportAsImage = async (element) => {
  const rect = element.getBoundingClientRect()

  const canvas = await html2canvas(element, {
    useCORS: true,
    scale: 1,
    backgroundColor: '#ffffff',

    // 🔥 핵심
    width: element.scrollWidth,
    height: element.scrollHeight,
    scrollX: 0,
    scrollY: 0,
  })

  const link = document.createElement('a')
  link.download = '이매방랑.png'
  link.href = canvas.toDataURL()
  link.click()
}