import {Productpricelevel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProductpricelevelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Productpricelevel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Productpricelevel();
}
