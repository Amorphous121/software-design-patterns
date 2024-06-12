import { PointIconFactory } from "./PointIconFactory";
import { PointService } from "./PointService";

const pointService = new PointService(new PointIconFactory());
const points = pointService.getPoints();

for(const point of points) {
    point.draw();
}