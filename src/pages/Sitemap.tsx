import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SITEMAP_PASSWORD = "bottega2026";

interface TreeNodeProps {
  label: string;
  path: string;
  children?: TreeNodeProps[];
  variant: "it" | "en";
}

const treeIT: TreeNodeProps = {
  label: "Home",
  path: "/",
  variant: "it",
  children: [
    {
      label: "Tutti i gioielli",
      path: "/gioielli",
      variant: "it",
      children: [
        {
          label: ":categoria (es. Anelli, Collane…)",
          path: "/gioielli/:categoria",
          variant: "it",
          children: [
            {
              label: ":slug (Singolo pezzo)",
              path: "/gioielli/:categoria/:slug",
              variant: "it",
            },
          ],
        },
      ],
    },
    {
      label: "Collezioni",
      path: "/collezioni",
      variant: "it",
    },
  ],
};

const treeEN: TreeNodeProps = {
  label: "Home",
  path: "/en",
  variant: "en",
  children: [
    {
      label: "All jewellery",
      path: "/en/jewellery",
      variant: "en",
      children: [
        {
          label: ":categoria (e.g. Rings, Necklaces…)",
          path: "/en/jewellery/:categoria",
          variant: "en",
          children: [
            {
              label: ":slug (Single piece)",
              path: "/en/jewellery/:categoria/:slug",
              variant: "en",
            },
          ],
        },
      ],
    },
    {
      label: "Collections",
      path: "/en/collections",
      variant: "en",
    },
  ],
};

const TreeNode = ({ label, path, children, variant }: TreeNodeProps) => {
  const navigate = useNavigate();
  const isNavigable = !path.includes(":");

  const bgClass = variant === "it"
    ? "bg-amber-50 border-amber-300 hover:bg-amber-100"
    : "bg-sky-50 border-sky-300 hover:bg-sky-100";

  return (
    <div className="flex flex-col items-start">
      <button
        onClick={() => isNavigable && navigate(path)}
        disabled={!isNavigable}
        className={`border rounded-lg px-4 py-2.5 text-left transition-colors ${bgClass} ${isNavigable ? "cursor-pointer" : "cursor-default opacity-80"}`}
      >
        <span className="block text-sm font-medium text-foreground">{label}</span>
        <span className="block text-xs font-mono text-muted-foreground mt-0.5">{path}</span>
      </button>
      {children && children.length > 0 && (
        <div className="ml-6 mt-2 flex flex-col gap-2 border-l-2 border-muted pl-4">
          {children.map((child, i) => (
            <TreeNode key={i} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sitemap = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SITEMAP_PASSWORD) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col gap-4">
          <h1 className="text-lg font-medium text-center text-foreground">Accesso riservato</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Password"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            autoFocus
          />
          {error && <p className="text-sm text-destructive text-center">Password errata</p>}
          <button
            type="submit"
            className="w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Accedi
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-1">
          Architettura sito — bottegamarcoaurelio.it
        </h1>
        <p className="text-sm text-muted-foreground mb-10">Mappa interattiva delle rotte. Clicca su un nodo per navigare.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-base font-medium mb-4 flex items-center gap-2">
              <span>🇮🇹</span> Italiano <span className="text-xs text-muted-foreground font-normal">(default)</span>
            </h2>
            <TreeNode {...treeIT} />
          </div>
          <div>
            <h2 className="text-base font-medium mb-4 flex items-center gap-2">
              <span>🇬🇧</span> English <span className="text-xs text-muted-foreground font-normal">(/en prefix)</span>
            </h2>
            <TreeNode {...treeEN} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
