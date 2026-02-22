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
    id: "energy",
    number: "01",
    labelKey: "industrialUsecases.industries.energy.label",
    cards: [
      {
        id: "energy-1",
        titleKey: "industrialUsecases.industries.energy.cards.predictive.title",
        excerptKey: "industrialUsecases.industries.energy.cards.predictive.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "energy-2",
        titleKey: "industrialUsecases.industries.energy.cards.grid.title",
        excerptKey: "industrialUsecases.industries.energy.cards.grid.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "energy-3",
        titleKey: "industrialUsecases.industries.energy.cards.safety.title",
        excerptKey: "industrialUsecases.industries.energy.cards.safety.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    id: "manufacturing",
    number: "02",
    labelKey: "industrialUsecases.industries.manufacturing.label",
    cards: [
      {
        id: "manu-1",
        titleKey: "industrialUsecases.industries.manufacturing.cards.quality.title",
        excerptKey: "industrialUsecases.industries.manufacturing.cards.quality.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "manu-2",
        titleKey: "industrialUsecases.industries.manufacturing.cards.production.title",
        excerptKey: "industrialUsecases.industries.manufacturing.cards.production.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "manu-3",
        titleKey: "industrialUsecases.industries.manufacturing.cards.operator.title",
        excerptKey: "industrialUsecases.industries.manufacturing.cards.operator.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1581093588401-22d5c7f8f5ad?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    id: "finance",
    number: "03",
    labelKey: "industrialUsecases.industries.finance.label",
    cards: [
      {
        id: "fin-1",
        titleKey: "industrialUsecases.industries.finance.cards.fraud.title",
        excerptKey: "industrialUsecases.industries.finance.cards.fraud.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "fin-2",
        titleKey: "industrialUsecases.industries.finance.cards.risk.title",
        excerptKey: "industrialUsecases.industries.finance.cards.risk.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "fin-3",
        titleKey: "industrialUsecases.industries.finance.cards.customer.title",
        excerptKey: "industrialUsecases.industries.finance.cards.customer.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    id: "public-sector",
    number: "04",
    labelKey: "industrialUsecases.industries.publicSector.label",
    cards: [
      {
        id: "gov-1",
        titleKey: "industrialUsecases.industries.publicSector.cards.serviceDesk.title",
        excerptKey: "industrialUsecases.industries.publicSector.cards.serviceDesk.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "gov-2",
        titleKey: "industrialUsecases.industries.publicSector.cards.command.title",
        excerptKey: "industrialUsecases.industries.publicSector.cards.command.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "gov-3",
        titleKey: "industrialUsecases.industries.publicSector.cards.compliance.title",
        excerptKey: "industrialUsecases.industries.publicSector.cards.compliance.excerpt",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
      }
    ]
  }
];
