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
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/gov-1.webp?updatedAt=1773042346573"
      },
      {
        id: "gov-2",
        titleKey: "industrialUsecases.industries.governance.cards.risk.title",
        excerptKey: "industrialUsecases.industries.governance.cards.risk.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/gov-2.webp?updatedAt=1773042346464"
      },
      {
        id: "gov-3",
        titleKey: "industrialUsecases.industries.governance.cards.audit.title",
        excerptKey: "industrialUsecases.industries.governance.cards.audit.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/gov-3.webp?updatedAt=1773042346659"
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
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/fs-1.webp?updatedAt=1773042346573"
      },
      {
        id: "fin-2",
        titleKey: "industrialUsecases.industries.financialServices.cards.credit.title",
        excerptKey: "industrialUsecases.industries.financialServices.cards.credit.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/fs-2.webp?updatedAt=1773042346559"
      },
      {
        id: "fin-3",
        titleKey: "industrialUsecases.industries.financialServices.cards.assistant.title",
        excerptKey: "industrialUsecases.industries.financialServices.cards.assistant.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/fs-3.webp?updatedAt=1773042346517"
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
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/man-1.webp?updatedAt=1773042346282"
      },
      {
        id: "manu-2",
        titleKey: "industrialUsecases.industries.manufacturing.cards.maintenance.title",
        excerptKey: "industrialUsecases.industries.manufacturing.cards.maintenance.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/man-2.webp?updatedAt=1773042346613"
      },
      {
        id: "manu-3",
        titleKey: "industrialUsecases.industries.manufacturing.cards.optimizer.title",
        excerptKey: "industrialUsecases.industries.manufacturing.cards.optimizer.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/man-3.webp?updatedAt=1773042346569"
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
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/en-1.webp?updatedAt=1773042346503"
      },
      {
        id: "energy-2",
        titleKey: "industrialUsecases.industries.energyUtilities.cards.grid.title",
        excerptKey: "industrialUsecases.industries.energyUtilities.cards.grid.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/en-2.webp?updatedAt=1773042346642"
      },
      {
        id: "energy-3",
        titleKey: "industrialUsecases.industries.energyUtilities.cards.asset.title",
        excerptKey: "industrialUsecases.industries.energyUtilities.cards.asset.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/en-3.webp?updatedAt=1773042346536"
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
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/ret-1.webp?updatedAt=1773042346400"
      },
      {
        id: "retail-2",
        titleKey: "industrialUsecases.industries.retail.cards.inventory.title",
        excerptKey: "industrialUsecases.industries.retail.cards.inventory.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/ret-2.webp?updatedAt=1773042346542"
      },
      {
        id: "retail-3",
        titleKey: "industrialUsecases.industries.retail.cards.demand.title",
        excerptKey: "industrialUsecases.industries.retail.cards.demand.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/ret-3.webp?updatedAt=1773042346607"
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
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/hc-1.webp?updatedAt=1773042346250"
      },
      {
        id: "health-2",
        titleKey: "industrialUsecases.industries.healthcare.cards.imaging.title",
        excerptKey: "industrialUsecases.industries.healthcare.cards.imaging.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/hc-2.webp?updatedAt=1773042346646"
      },
      {
        id: "health-3",
        titleKey: "industrialUsecases.industries.healthcare.cards.documentation.title",
        excerptKey: "industrialUsecases.industries.healthcare.cards.documentation.excerpt",
        imageUrl: "https://ik.imagekit.io/mindwalker/public/assets/industrialUsecase/hc-3.webp?updatedAt=1773042346475"
      }
    ]
  }
];
