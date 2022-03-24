import {Importentitymapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportentitymappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Importentitymapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Importentitymapping();
}
