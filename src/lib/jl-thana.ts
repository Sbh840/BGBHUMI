export interface JlThanaMapping {
  khatianNo: string;
  plotNo: string;
  jlNo: string;
  thana: string;
}

export const JL_THANA_LIST: JlThanaMapping[] = [
  { khatianNo: '287', plotNo: '1145', jlNo: '4', thana: 'জগদ্দল' },
  { khatianNo: '1081', plotNo: '1145', jlNo: '4', thana: 'জগদ্দল' },
  { khatianNo: '2604', plotNo: '1145', jlNo: '4', thana: 'জগদ্দল' },
  { khatianNo: '2611', plotNo: '1145', jlNo: '4', thana: 'জগদ্দল' },
  { khatianNo: '2625', plotNo: '1145', jlNo: '4', thana: 'জগদ্দল' },
  { khatianNo: '2644', plotNo: '1145', jlNo: '4', thana: 'জগদ্দল' },
  { khatianNo: '2742', plotNo: '1145', jlNo: '4', thana: 'জগদ্দল' },
  { khatianNo: '3549', plotNo: '1145', jlNo: '4', thana: 'জগদ্দল' },
  { khatianNo: '4285', plotNo: '1145', jlNo: '4', thana: 'জগদ্দল' },
  { khatianNo: '1964', plotNo: '803', jlNo: '18', thana: 'বেলুর' },
  { khatianNo: '1965', plotNo: '803', jlNo: '18', thana: 'বেলুর' },
  { khatianNo: '1967', plotNo: '803', jlNo: '18', thana: 'বেলুর' },
  { khatianNo: '2172', plotNo: '803', jlNo: '18', thana: 'বেলুর' },
  { khatianNo: '2173', plotNo: '803', jlNo: '18', thana: 'বেলুর' },
  { khatianNo: '2174', plotNo: '803', jlNo: '18', thana: 'বেলুর' },
  { khatianNo: '2175', plotNo: '802', jlNo: '18', thana: 'বেলুর' },
  { khatianNo: '2176', plotNo: '802', jlNo: '18', thana: 'বেলুর' },
  { khatianNo: '2179', plotNo: '802', jlNo: '18', thana: 'বেলুর' },
  { khatianNo: '2180', plotNo: '802', jlNo: '18', thana: 'বেলুর' },
  { khatianNo: '2181', plotNo: '802', jlNo: '18', thana: 'বেলুর' },
];

const buildJlThanaMap = () =>
  JL_THANA_LIST.reduce((acc, item) => {
    const key = `${item.khatianNo}:${item.plotNo}`;
    acc[key] = { jlNo: item.jlNo, thana: item.thana };
    return acc;
  }, {} as Record<string, { jlNo: string; thana: string }>);

export const JL_THANA_MAP = buildJlThanaMap();

export function getJlThanaByPlotAndKhatian(
  khatianNo: string,
  plotNo: string,
): { jlNo: string; thana: string } | undefined {
  return JL_THANA_MAP[`${khatianNo}:${plotNo}`];
}
