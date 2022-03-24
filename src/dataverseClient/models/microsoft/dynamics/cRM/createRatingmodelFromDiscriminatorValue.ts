import {Ratingmodel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRatingmodelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Ratingmodel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Ratingmodel();
}
