import type { LucideIcon } from "lucide-react";
import {
  Axe,
  Crosshair,
  Fish,
  FlaskConical,
  Globe,
  PawPrint,
  Pickaxe,
  Sparkles,
  Swords,
  Wheat,
} from "lucide-react";

export const skillIcons: Record<string, LucideIcon> = {
  mining: Pickaxe,
  combat: Swords,
  foraging: Axe,
  farming: Wheat,
  fishing: Fish,
  hunting: Crosshair,
  enchanting: Sparkles,
  taming: PawPrint,
  alchemy: FlaskConical,
  global: Globe,
};
