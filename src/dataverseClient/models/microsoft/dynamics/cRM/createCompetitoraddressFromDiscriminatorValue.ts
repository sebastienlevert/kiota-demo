import {Competitoraddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCompetitoraddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : Competitoraddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Competitoraddress();
}
