import {Savedquery} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSavedqueryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Savedquery {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Savedquery();
}
