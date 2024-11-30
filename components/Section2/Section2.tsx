import styles from './Section2.module.css'
import Image from 'next/image'


const Section2 = () => {
  return (
    <div className={styles._main_containar}>

        <div className={styles._containar}>
            <h1 className={styles._main_heading}>Browse Used Cars</h1>
            <ul className={styles._ul_div}>
                <li className={styles._li}>Category</li>
                <li className={styles._li}>City</li>
                <li className={styles._li}>Make</li>
                <li className={styles._li}>Model</li>
                <li className={styles._li}>Budget</li>
                <li className={styles._li}>Body Type</li>
            </ul>
                <hr />
            <div className={styles._grid}>
                <div className={styles._card}><Image src={'/images/one.svg'} alt='img' height={80} width={80}/> <h3 className={styles._headingss}>2 Door</h3></div>
                <div className={styles._card}><Image src={'/images/two.svg'} alt='img' height={80} width={100}/> <h3 className={styles._headingss}>Sport Cars</h3></div>
                <div className={styles._card}><Image src={'/images/three.svg'} alt='img' height={80} width={80}/> <h3 className={styles._headingss}>2 Seater</h3></div>
                <div className={styles._card}><Image src={'/images/four.svg'} alt='img' height={80} width={80}/> <h3 className={styles._headingss}>Modified Cars</h3></div>
                <div className={styles._card}><Image src={'/images/five.svg'} alt='img' height={80} width={40}/> <h3 className={styles._headingss}>Custom Auction</h3></div>
                <div className={styles._card}><Image src={'/images/six.svg'} alt='img' height={80} width={80}/> <h3 className={styles._headingss}>3 Door Car</h3></div>
                <div className={styles._card}><Image src={'/images/seven.svg'} alt='img' height={80} width={70}/> <h3 className={styles._headingss}>Duplicate File</h3></div>
                <div className={styles._card}><Image src={'/images/eight.svg'} alt='img' height={80} width={80}/> <h3 className={styles._headingss}>Urgent</h3></div>
                <div className={styles._card}><Image src={'/images/nine.svg'} alt='img' height={80} width={50}/> <h3 className={styles._headingss}>Duplicate Book Cars</h3></div>
                <div className={styles._card}><Image src={'/images/ten.svg'} alt='img' height={80} width={80}/> <h3 className={styles._headingss}>Army Auction Jeeps</h3></div>
                <div className={styles._card}><Image src={'/images/eleven.svg'} alt='img' height={80} width={80}/> <h3 className={styles._headingss}>Amnesty Scheme</h3></div>
                <div className={styles._card}><Image src={'/images/twileave.svg'} alt='img' height={80} width={80}/> <h3 className={styles._headingss}>Carry Daba</h3></div>
            </div>

        </div>
    </div>
  )
}

export default Section2







