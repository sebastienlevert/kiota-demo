import {Competitor} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCompetitorFromDiscriminatorValue(parseNode: ParseNode | undefined) : Competitor {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Competitor();
}
