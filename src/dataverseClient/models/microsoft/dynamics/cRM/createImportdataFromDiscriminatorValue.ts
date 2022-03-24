import {Importdata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportdataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Importdata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Importdata();
}
