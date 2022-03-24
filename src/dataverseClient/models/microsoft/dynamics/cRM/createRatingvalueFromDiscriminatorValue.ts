import {Ratingvalue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRatingvalueFromDiscriminatorValue(parseNode: ParseNode | undefined) : Ratingvalue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Ratingvalue();
}
