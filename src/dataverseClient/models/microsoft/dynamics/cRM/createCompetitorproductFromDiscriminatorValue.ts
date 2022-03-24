import {Competitorproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCompetitorproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Competitorproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Competitorproduct();
}
