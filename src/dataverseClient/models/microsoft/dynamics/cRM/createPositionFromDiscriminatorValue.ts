import {Position} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPositionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Position {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Position();
}
