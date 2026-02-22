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
        imageUrl: "https://images.unsplash.com/photo-1551281044-8b1d57b1a2d1?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "gov-2",
        titleKey: "industrialUsecases.industries.governance.cards.risk.title",
        excerptKey: "industrialUsecases.industries.governance.cards.risk.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "gov-3",
        titleKey: "industrialUsecases.industries.governance.cards.audit.title",
        excerptKey: "industrialUsecases.industries.governance.cards.audit.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=900&q=80"
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
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "fin-2",
        titleKey: "industrialUsecases.industries.financialServices.cards.credit.title",
        excerptKey: "industrialUsecases.industries.financialServices.cards.credit.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "fin-3",
        titleKey: "industrialUsecases.industries.financialServices.cards.assistant.title",
        excerptKey: "industrialUsecases.industries.financialServices.cards.assistant.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
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
        imageUrl: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "manu-3",
        titleKey: "industrialUsecases.industries.manufacturing.cards.optimizer.title",
        excerptKey: "industrialUsecases.industries.manufacturing.cards.optimizer.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1581091215367-59ab6dcef5f9?auto=format&fit=crop&w=900&q=80"
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
        imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "energy-2",
        titleKey: "industrialUsecases.industries.energyUtilities.cards.grid.title",
        excerptKey: "industrialUsecases.industries.energyUtilities.cards.grid.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "energy-3",
        titleKey: "industrialUsecases.industries.energyUtilities.cards.asset.title",
        excerptKey: "industrialUsecases.industries.energyUtilities.cards.asset.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80"
      }
    ]
  }
];
