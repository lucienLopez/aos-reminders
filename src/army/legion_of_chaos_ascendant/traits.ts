import { TTraits } from 'types/army'
import { END_OF_MOVEMENT_PHASE, WOUND_ALLOCATION, CHARGE_PHASE } from 'types/phases'

const CommandTraits: TTraits = [
  {
    name: `Primordial Commander`,
    effects: [
      {
        name: `Primordial Commander`,
        desc: `If you pick this general to summon via Unyielding Legions, add 1 to the roll.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
    ],
  },
  {
    name: `Ruinous Aura`,
    effects: [
      {
        name: `Ruinous Aura`,
        desc: `Add 1 to Infernal Realmwalkers rolls for Chaos Ascendant Daemon units wholly within 8" of this general.`,
        when: [WOUND_ALLOCATION],
      },
    ],
  },
  {
    name: `Infernal Charge`,
    effects: [
      {
        name: `Infernal Charge`,
        desc: `You can re-roll charge rolls made for any friendly Chaos Ascendant Daemon units wholly within 12" of this general.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
]

export default CommandTraits
