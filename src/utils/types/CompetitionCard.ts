export interface CompetitionCardProps {
  date: string;
  departmentID: string;
  deptName: string;
  eventId: string;
  eventName: string;
  imageUrl: string;
}

export type CompetitionsProps = {
  events: CompetitionCardProps[];
};
