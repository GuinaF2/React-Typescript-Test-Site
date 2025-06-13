import { useState, useEffect } from "react";

// --- CONSTANTES BASE DO JOGO ---
const BASE_PPS_NEGOCIO1 = 1; // Vender Curso
const BASE_PPS_NEGOCIO2 = 10; // Divulgar Plataforma de Aposta
const BASE_PPS_NEGOCIO3 = 50; // Esquema de Piramide

//Criação de numero aleatório para aposta na Função ComprarAposta
const gerarNumeroAleatorio = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

function App() {
  // --- ESTADOS (useState) ---
  const [pontos, setPontos] = useState(0);
  const [valorClique, setValorClique] = useState(1);
  const [tela, setTela] = useState<"home" | "upgrades">("home");

  const [custoUpgrade1, setCustoUpgrade1] = useState(50);
  const [custoUpgrade2, setCustoUpgrade2] = useState(1000);
  const [custoUpgrade3, setCustoUpgrade3] = useState(10000);
  const [qntdNegocio1, setNegocio1] = useState(0);
  const [qntdNegocio2, setNegocio2] = useState(0);
  const [qntdNegocio3, setNegocio3] = useState(0);

  const [globalPPSMultiplier, setGlobalPPSMultiplier] = useState(1);
  const [hasigrejaUpgrade, setHasigrejaUpgrade] = useState(false);
  const [hasIndianoUpgrade, sethasIndianoUpgrade] = useState(false);

  const [custoGlobalClickValueMultiplier] = useState(250);
  const [custoIgreja] = useState(3000);
  const [custoIndiano] = useState(1500);
  const [custoAposta, setCustoAposta] = useState(200);
  const [custoClique, setCustoClique] = useState(250);
  
  //Definição dos Pontos por Segundo
  const pontosps =
    (qntdNegocio1 * BASE_PPS_NEGOCIO1 +
      qntdNegocio2 * BASE_PPS_NEGOCIO2 +
      qntdNegocio3 * BASE_PPS_NEGOCIO3) *
    globalPPSMultiplier;
  //UseEffect para executar o intervalo de adição de pontos por segundo
  useEffect(() => {
    // Se não há pontos por segundo, não faz nada.
    if (pontosps <= 0) {
      return; 
    }
    // Cria um novo intervalo
    const intervalId = setInterval(() => {
      // Usamos a forma funcional para garantir que estamos adicionando ao valor mais recente dos pontos
      setPontos((pontosAtuais) => pontosAtuais + pontosps);
    }, 1000); // Roda a cada 1000ms (1 segundo)
    // Retorna uma função de limpeza. Para previnir valor "fantasma" na aposta bem sucedida
    return () => {
      clearInterval(intervalId); // Limpa o intervalo anterior
    };
  }, [pontosps]); // A dependência continua sendo 'pontosps'

  //adiciona aos pontos do jogador o valor do clique
  function handleClick() {
    setPontos(pontos + valorClique);
  }

  //Função de compra do 1ºNegócio, cobra o valor, aumenta o preço e aumenta a quantidade exibida em 1
  function comprarNegocio1() {
    if (pontos >= custoUpgrade1) {
      setPontos(pontos - custoUpgrade1);
      setNegocio1(qntdNegocio1 + 1);
      setCustoUpgrade1(Math.round(custoUpgrade1 * 1.5));
    } else {
      alert("Pontos insuficientes!");
    }
  }

  //Similar a primeira função
  function comprarNegocio2() {
    if (pontos >= custoUpgrade2) {
      setPontos(pontos - custoUpgrade2);
      setNegocio2(qntdNegocio2 + 1);
      setCustoUpgrade2(Math.round(custoUpgrade2 * 1.5));
    } else {
      alert("Pontos insuficientes!");
    }
  }
  //Similar a primeira função
  function comprarNegocio3() {
    if (pontos >= custoUpgrade3) {
      setPontos(pontos - custoUpgrade3);
      setNegocio3(qntdNegocio3 + 1);
      setCustoUpgrade3(Math.round(custoUpgrade3 * 1.5));
    } else {
      alert("Pontos insuficientes!");
    }
  }

  //Se tiver dinheiro suficiente, cobra o valor, multiplica e aumenta o valor inicial
  function comprarUpgradeClique() {
    if (pontos >= custoGlobalClickValueMultiplier) {
      setPontos(pontos - custoGlobalClickValueMultiplier);
      setValorClique(valorClique * 2);
      setCustoClique(Math.round(custoClique * 1.5));
    } else {
      alert("Pontos insuficientes!");
    }
  }

  //Função de compra unica, possui booleana para alteração de estado dos elementos
  function comprarigrejaUpgrade() {
    if (pontos >= custoIgreja && !hasigrejaUpgrade) {
      setPontos(pontos - custoIgreja);
      setGlobalPPSMultiplier(globalPPSMultiplier * 2);
      setHasigrejaUpgrade(true);
    } else {
      alert(
        hasigrejaUpgrade ? "Melhoria já comprada." : "Pontos insuficientes!"
      );
    }
  }
  //Função de compra unica, possui booleana para alteração de estado dos elementos
  function comprarIndiano() {
    if (pontos >= custoIndiano && !hasIndianoUpgrade) {
      setPontos(pontos - custoIndiano);
      sethasIndianoUpgrade(true);
    } else {
      alert(
        hasIndianoUpgrade ? "Melhoria já comprada." : "Pontos insuficientes!"
      );
    }
  }
  
  //Cria um numero aleatório que a depender pode ser bem ou mal sucedido
  function comprarAposta() {
    if (pontos >= custoAposta) {
      setPontos(pontos - custoAposta);
      setCustoAposta(Math.round(custoAposta * 1.2));

      const numeroEntre0e100 = gerarNumeroAleatorio(0, 100);

      if (numeroEntre0e100 < 50) {
        alert("Sorte! Seus ganhos foram multiplicados por 10 por 5 segundos!");
        
        // Immediately apply the boost using the functional update
        setGlobalPPSMultiplier(currentMultiplier => currentMultiplier * 10);

        // Set a timer to remove the boost after 5 seconds
        setTimeout(() => {
          // Revert the multiplier using the functional update to avoid state closure issues
          setGlobalPPSMultiplier(currentMultiplier => currentMultiplier / 10);
          alert("O bônus da aposta acabou.");
        }, 5000); // 5000 milliseconds = 5 seconds

      } else {
        alert("Azar! Você perdeu tudo.");
        setPontos(0); // setPontos(pontos - pontos) is the same as setPontos(0)
      }
    } else {
      alert("Pontos insuficientes!");
    }
  }
  //Codigo HTML
    return (
    <>
      <div className="navbar">
        <h1>
          <a href="index.html">Scam Game</a>
        </h1>
        <div>
          <!--dasdasd-->
          <a href="#" onClick={() => setTela("home")}>
            Inicio
          </a>
          <a href="#" onClick={() => setTela("upgrades")}>
            Melhorias
          </a>
        </div>
      </div>

      {tela === "home" && (
        <div className="container">
          <h2>Scam Game</h2>
          <button className="button" id="clickButton" onClick={handleClick}>
            Aplicar Golpe
          </button>{" "}
          <div className="info">Dinheiro: R$ {Math.floor(pontos)}</div>
          <div className="info">
            Dinheiro por golpe individual: R$ {valorClique}
          </div>
          <div className="info">Dinheiro por Segundo: R$ {pontosps.toFixed(1)} /s</div>
          <button
            className="button upgrade-button"
            onClick={comprarNegocio1}
            disabled={pontos < custoUpgrade1}
          >
            <span>{qntdNegocio1}</span> Vender Curso ( R$ {custoUpgrade1})
          </button>
          <button
            className="button upgrade-button"
            onClick={comprarNegocio2}
            disabled={pontos < custoUpgrade2}
          >
            <span>{qntdNegocio2}</span> Divulgar Plataforma de Aposta ( R$ {custoUpgrade2})
          </button>
          <button
            className="button upgrade-button"
            onClick={comprarNegocio3}
            disabled={pontos < custoUpgrade3}
          >
           <span>{qntdNegocio3}</span>  Esquema de Pirâmide ( R$ {custoUpgrade3})
          </button>
        </div>
      )}

      {tela === "upgrades" && (
        <div className="container">
          <h2>Loja de Melhorias</h2>
          <div className="upgrades-grid">
            <div className="upgrade-card">
              <h3>Coach com Pablo Marçal</h3>
              <p>
                 Aprenda com o melhor!! Duplica permanentemente o dinheiro gerado por cada golpe
                individual.
              </p>
              <button
                className="button upgrade-button"
                onClick={comprarUpgradeClique}
                disabled={pontos < custoClique}
              >
                Comprar (R$ ${custoClique})
              </button>
            </div>
            <div className="upgrade-card">
              <h3>Adquirir Igreja</h3>
              <p>
                Duplica permanentemente a geração de dinheiro de TODOS os seus
                negócios, pois tudo que vem de Deus é limpo.
              </p>
              <button
                className="button upgrade-button"
                onClick={comprarigrejaUpgrade}
                disabled={pontos < custoIgreja || hasigrejaUpgrade}
              >
                {hasigrejaUpgrade ? "Comprado" : `Comprar (R$ ${custoIgreja})`}
              </button>
            </div>
            <div className="upgrade-card">
              <h3>Contratar Indiano</h3>
              <p>Aumenta a chance de golpe crítico (Clique Individual 3x). Não existe alguém melhor na área</p>
              <button
                className="button upgrade-button"
                onClick={comprarIndiano}
                disabled={pontos < custoIndiano || hasIndianoUpgrade}
              >
                {hasIndianoUpgrade
                  ? "Comprado"
                  : `Comprar (R$ ${custoIndiano})`}
              </button>
            </div>
            <div className="upgrade-card">
              <h3>Apostar Tudo</h3>
              <p>
                50% de chance de multiplicar seus ganhos por 10 durante 5 segundos, ou 50% de chance de perder tudo.
              </p>
              <button
                className="button upgrade-button"
                onClick={comprarAposta}
                disabled={pontos < custoAposta}
              >
                Apostar (R$ {custoAposta})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
