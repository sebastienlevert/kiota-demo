import {Pricelevel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPricelevelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Pricelevel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Pricelevel();
}
