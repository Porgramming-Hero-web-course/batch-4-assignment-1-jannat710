{
    type Circle = {
        shape: "circle";
        radius: number;
    }
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    const calculateShapeArea = (data: Shape) => {
        if ('radius' in data) {
            return parseFloat((Math.PI * data.radius * data.radius).toFixed(2));
        } else if ('width' in data && 'height' in data) {
            return (data.width * data.height);
        } else {
            throw new Error('Please give numbers')
        }
    }

    const circleArea = calculateShapeArea({
        shape: "circle",
        radius: 5
    });

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
}