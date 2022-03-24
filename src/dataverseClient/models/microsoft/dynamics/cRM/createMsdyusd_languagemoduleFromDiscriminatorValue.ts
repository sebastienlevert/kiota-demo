import {Msdyusd_languagemodule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_languagemoduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_languagemodule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_languagemodule();
}
