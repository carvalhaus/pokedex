import AccountInfo from "./AccountInfo";
import ContentMenu from "./ContentMenu";
import HeaderMenu from "./HeaderMenu";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Switch } from "./ui/switch";

function Menu() {
  return (
    <ScrollArea className="h-full px-4">
      {/* <HeaderMenu /> */}
      <AccountInfo />
      <div className="pt-5 flex flex-col gap-8">
        <ContentMenu
          title="Pokédex"
          subtitle_one="Mega evoluções"
          text_one="Habilita a exibição de mega
            evoluções."
          subtitle_two="Outras formas"
          text_two="Habilita a exibição de formas
            alternativas de pokémon."
        />
        <ContentMenu
          title="Notificações"
          subtitle_one="Atualizações na pokédex"
          text_one="Novos Pokémons, habilidades, 
        informações, etc."
          subtitle_two="Mundo Pokémon"
          text_two="Acontecimentos e informações
        do mundo de pokémon."
        />
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Idioma</h3>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="font-semibold text-sm">Idioma da interface</h4>
              <p className="text-sm">Português (PT-BR)</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm">
                Idioma de informações em jogo
              </h4>
              <p className="text-sm">English (US)</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Geral</h3>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="font-semibold text-sm">Versão</h4>
              <p className="text-sm">0.8.12</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm">Termos e condições</h4>
              <p className="text-sm">Tudo o que você precisa saber.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm">Central de ajuda</h4>
              <p className="text-sm">Precisa de ajuda? Fale conosco.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm">Sobre</h4>
              <p className="text-sm">Saiba mais sobre o app.</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default Menu;
