import AboutMe from "@/pages/aboutme";
import Image from "next/image";

export default function Home() {
  return (
    <main  className="bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="flex h-screen m-0 p-0 box-border flex-col md:flex-row items-center justify-center p-36 gap-8 md:gap-32">
        <div className="h-72 w-72 flex justify-center items-center">
          <img
            src="https://lh3.googleusercontent.com/pw/ABLVV86SSxNevPkv1MRy4gCTJ7UCfLba9Qbi5PVQUIHs-Bzn1fSoU08B_Whqods2CT-FY7oS7XUPzh9Eyc81rVzROZ6weqJlMd-SGmezDtSdPjOxGdQr9sqBJqrfz4IPEmwiSOiFXBCQDUnTERkC7CkYpfh4ec4XVq1NuQ4EcqC6ytKR5yQkFTyqvInW8-kUJk_LDuSOzZrT_H709tsyjWHWj1Ci3zlcXbhUb2_gKybueKMgu_slHzI1zws0MHiWTZ-qpNXvdI_eq3tM0j4V1Rj80cluM_HvEuOhZ9DQFXdLXdhREDIDHl-4K4djtgaUQl39TMPPW8_yrrc54YCaIssQ6XHvOi89p4pBAfpE2LCH81PlrSZX_jcNWySFTZ6DFIPmJ0FTBplmLfYlRKjNvN7Aan67T6mt4jEdwKNdb0YHrMvi7x53dhARrf_z0kRFxqJiEfl7NoW68A0HhJHWgxJmN47lZ2lYDWTmy3wJYTEoIQkXoyxLuvreLq_LebOlB96tIbagWf1lBbbANl1stfS9fbiVpfRFGnUDRakmN1eCxord78aW2qfNcA7jn0yTnnKMTCsh4m_erIUXb5axEGK9bFRjZkSKNNHSKb8Vgu3QKduc4XofkI6cC0YAOkAeUckAwcHAFRZR0ZNzO1M43_Vguj8i9O0n8oQU3Xc8jEBd72v0nssOFRUemH74r4QTZgVhfnOJfO3N7vgmKxed7PwgajIfIO7DBaRYqDYdmIXz5MqIg8ZGjGG8qhjQvePxyYYPdaz_bGUmUJlUZQAZT0z2uSoRbZqgBNqBrZ_oVnW_CL2Ad08jeBe70NMal8m_oB6fXgaf53EqOHPQii_mHKrxRDBQWgH4mAQmqmt8WRc47v8cboLGRlxO0hKMYffR3l4cXLUm1XNpjPmvXQ0el6L1VNgW21Ds=w688-h688-s-no-gm?authuser=0"
            alt=""
            className="rounded-full p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[200px] h-[300px] object-cover"
          />
        </div>
        <div className="h-72 w-72 md:flex md:flex-col md:justify-center md:items-center">
          <h1 className="text-6xl md:text-8xl font-bold text-center text-slate-50 uppercase">
            D.
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-center text-slate-50 leading-[.75] md:leading-[.7] uppercase">
            Santos
          </h1>
          <p className="text-lg md:text-2xl text-center font-bold uppercase bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mt-2">
            Frontend Developer
          </p>
        </div>
      </div>
      <AboutMe />
    </main>
  );
}
