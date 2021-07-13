import Head from "next/head";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <div className="body">
        {/* Nav */}

        <div className="nav">
          <div className="nav-flex">
            <div className="wraper">
              <div className="description-nav">Persegi Panjang</div>
              <div style={{ paddingTop: "6px", paddingRight: "20px" }}>
                <Image
                  width="20px"
                  height="20px"
                  src="/assets/arrow.png"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* End Nav */}

        {/* Content */}

        <div style={{ padding: " 50px 32px" }}>
          <Image
            layout="responsive"
            width={430}
            height={268}
            src="/assets/persegi-panjang.png"
            alt="bangun datar"
          />
        </div>

        <div className="items1">
          <div>Rumus :</div>
        </div>
        <div className="items2">
          <div
            style={{
              paddingLeft: "2px",
              paddingRight: "12px",
            }}
          >
            <Image
              width="10px"
              height="10px"
              src="/assets/arrow.png"
              alt="arrow"
            />
          </div>
          <div>
            <div>Luas = P x L</div>
          </div>
        </div>

        {/* End Content */}

        {/* Footer */}
        <div className="flex-footer">
          <div className="wrapper-footer">
            <div className="heading">
              <div>Kalkulator</div>
            </div>

            <div style={{ padding: "10px" }}>
              <div className="menu">
                <div className="text">
                  Panjang <span style={{ paddingLeft: "10px" }}>:</span>
                </div>
                <input className="input" placeholder="Masukan angka" />
              </div>
            </div>

            <div style={{ padding: "10px" }}>
              <div className="menu">
                <div className="text">
                  Lebar <span style={{ paddingLeft: "26px" }}>:</span>
                </div>
                <input className="input" placeholder="Masukan angka" />
              </div>
            </div>

            <div className="botton">
              <div>H i t u n g</div>
            </div>

            <div style={{ padding: "10px 0px" }}>
              <div className="description">
                <div className="text">
                  Hasil <span style={{ paddingLeft: "10px" }}>=</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Footer */}
      </div>
    </div>
  );
};

export default HomePage;
