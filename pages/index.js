import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {MainLayout} from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Travel App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
            <div className={styles.wrapper}>
                <h1 className={styles.intro_title}>
                    Beautiful Places of England
                </h1>
                <p className={styles.intro_subtitle}>
                    Plan your vacation on the most beautiful <br/> places of England
                </p>
                <form className={styles.search_form}>
                    <fieldset className={styles.search_form_wrap}>
                        <h1 className={styles.search_form_title}>Book your vacation</h1>
                        <p className={styles.search_form_info}>
                            <label>
                                Accommodation
                                <select className={styles.search_form_field} name={'accommodation'}>
                                    <option>6730 Luna Land North Rhiannonmouth</option>
                                    <option>6731 Luna Land North Rhiannonmouth</option>
                                </select>
                            </label>
                            <label>
                                Check-in
                                <input type={'date'} className={styles.search_form_field} name={'checkin'}/>
                            </label>
                            <label>
                                Check-out
                                <input type={'date'} className={styles.search_form_field} name={'checkout'}/>
                            </label>
                            <label>
                                Guests
                                <select className={styles.search_form_field} name={'guests'}>
                                    <option>4 adults</option>
                                    <option>3 adults</option>
                                    <option>2 adults</option>
                                    <option>1 adults</option>
                                </select>
                            </label>
                            <button type={'submit'} className={styles.search_form_submit}>Search</button>
                        </p>
                    </fieldset>
                </form>
            </div>
        </section>

      </main>
    </MainLayout>
  )
}
