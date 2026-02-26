export type IndustrialUsecaseCard = {
  id: string;
  titleKey: string;
  excerptKey: string;
  imageUrl: string;
};

export type IndustryItem = {
  id: string;
  number: string;
  labelKey: string;
  cards: IndustrialUsecaseCard[];
};

export const industrialUsecaseData: IndustryItem[] = [
  {
    id: "governance",
    number: "01",
    labelKey: "industrialUsecases.industries.governance.label",
    cards: [
      {
        id: "gov-1",
        titleKey: "industrialUsecases.industries.governance.cards.policy.title",
        excerptKey: "industrialUsecases.industries.governance.cards.policy.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772088106939-dd47924bf81853bb.jpeg"
      },
      {
        id: "gov-2",
        titleKey: "industrialUsecases.industries.governance.cards.risk.title",
        excerptKey: "industrialUsecases.industries.governance.cards.risk.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772088196922-3c5e52647fd32697.jpeg"
      },
      {
        id: "gov-3",
        titleKey: "industrialUsecases.industries.governance.cards.audit.title",
        excerptKey: "industrialUsecases.industries.governance.cards.audit.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772088660630-7412af01aeaa1c36.jpeg"
      }
    ]
  },
  {
    id: "financial-services",
    number: "02",
    labelKey: "industrialUsecases.industries.financialServices.label",
    cards: [
      {
        id: "fin-1",
        titleKey: "industrialUsecases.industries.financialServices.cards.fraud.title",
        excerptKey: "industrialUsecases.industries.financialServices.cards.fraud.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772093517328-ea0293cbcd758817.jpeg"
      },
      {
        id: "fin-2",
        titleKey: "industrialUsecases.industries.financialServices.cards.credit.title",
        excerptKey: "industrialUsecases.industries.financialServices.cards.credit.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772090719223-fb7207c4d1b5d79d.jpeg"
      },
      {
        id: "fin-3",
        titleKey: "industrialUsecases.industries.financialServices.cards.assistant.title",
        excerptKey: "industrialUsecases.industries.financialServices.cards.assistant.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772090570367-2f966954c077d8fb.jpeg"
      }
    ]
  },
  {
    id: "manufacturing",
    number: "03",
    labelKey: "industrialUsecases.industries.manufacturing.label",
    cards: [
      {
        id: "manu-1",
        titleKey: "industrialUsecases.industries.manufacturing.cards.quality.title",
        excerptKey: "industrialUsecases.industries.manufacturing.cards.quality.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "manu-2",
        titleKey: "industrialUsecases.industries.manufacturing.cards.maintenance.title",
        excerptKey: "industrialUsecases.industries.manufacturing.cards.maintenance.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772093754914-4cddbfa1faaa8c20.jpeg"
      },
      {
        id: "manu-3",
        titleKey: "industrialUsecases.industries.manufacturing.cards.optimizer.title",
        excerptKey: "industrialUsecases.industries.manufacturing.cards.optimizer.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772095423365-e3581c6d1dcbab50.jpeg"
      }
    ]
  },
  {
    id: "energy-utilities",
    number: "04",
    labelKey: "industrialUsecases.industries.energyUtilities.label",
    cards: [
      {
        id: "energy-1",
        titleKey: "industrialUsecases.industries.energyUtilities.cards.forecast.title",
        excerptKey: "industrialUsecases.industries.energyUtilities.cards.forecast.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772100301082-988851f9e07f7f0b.jpeg"
      },
      {
        id: "energy-2",
        titleKey: "industrialUsecases.industries.energyUtilities.cards.grid.title",
        excerptKey: "industrialUsecases.industries.energyUtilities.cards.grid.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/images/seedream/1772100544785-2bffac36c9253747.jpeg"
      },
      {
        id: "energy-3",
        titleKey: "industrialUsecases.industries.energyUtilities.cards.asset.title",
        excerptKey: "industrialUsecases.industries.energyUtilities.cards.asset.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/nano-banana/1772100845406-5b60c999eb0b4d7c.png"
      }
    ]
  },
  {
    id: "retail",
    number: "05",
    labelKey: "industrialUsecases.industries.retail.label",
    cards: [
      {
        id: "retail-1",
        titleKey: "industrialUsecases.industries.retail.cards.recommendation.title",
        excerptKey: "industrialUsecases.industries.retail.cards.recommendation.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/nano-banana/1772101305516-a84a8391d3909fd2.png"
      },
      {
        id: "retail-2",
        titleKey: "industrialUsecases.industries.retail.cards.inventory.title",
        excerptKey: "industrialUsecases.industries.retail.cards.inventory.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/nano-banana/1772101601571-cd4e7fe6c3e5ecef.png"
      },
      {
        id: "retail-3",
        titleKey: "industrialUsecases.industries.retail.cards.demand.title",
        excerptKey: "industrialUsecases.industries.retail.cards.demand.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/nano-banana/1772101746236-5ad71b0f7b08f4df.png"
      }
    ]
  },
  {
    id: "healthcare",
    number: "06",
    labelKey: "industrialUsecases.industries.healthcare.label",
    cards: [
      {
        id: "health-1",
        titleKey: "industrialUsecases.industries.healthcare.cards.triage.title",
        excerptKey: "industrialUsecases.industries.healthcare.cards.triage.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/nano-banana/1772102204058-62519ce63fb0e817.png"
      },
      {
        id: "health-2",
        titleKey: "industrialUsecases.industries.healthcare.cards.imaging.title",
        excerptKey: "industrialUsecases.industries.healthcare.cards.imaging.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/nano-banana/1772102326878-f43775d6683ce06b.png"
      },
      {
        id: "health-3",
        titleKey: "industrialUsecases.industries.healthcare.cards.documentation.title",
        excerptKey: "industrialUsecases.industries.healthcare.cards.documentation.excerpt",
        imageUrl: "https://visioncraft.tos-ap-southeast-3.bytepluses.com/nano-banana/1772102733284-a3e15881a674e586.png"
      }
    ]
  }
];
