import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {Crmbaseentity, Principal} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Principalentitymap extends Crmbaseentity implements Parsable {
    private _objecttypecode?: string | undefined;
    private _principalentitymapid?: string | undefined;
    private _principalid?: string | undefined;
    private _principalid_owner?: Principal | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new principalentitymap and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "objecttypecode": (o, n) => { (o as unknown as Principalentitymap).objecttypecode = n.getStringValue(); },
            "principalentitymapid": (o, n) => { (o as unknown as Principalentitymap).principalentitymapid = n.getStringValue(); },
            "principalid": (o, n) => { (o as unknown as Principalentitymap).principalid = n.getStringValue(); },
            "principalid_owner": (o, n) => { (o as unknown as Principalentitymap).principalid_owner = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Principalentitymap).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the objecttypecode property value. 
     * @returns a string
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: string | undefined) {
        this._objecttypecode = value;
    };
    /**
     * Gets the principalentitymapid property value. 
     * @returns a string
     */
    public get principalentitymapid() {
        return this._principalentitymapid;
    };
    /**
     * Sets the principalentitymapid property value. 
     * @param value Value to set for the principalentitymapid property.
     */
    public set principalentitymapid(value: string | undefined) {
        this._principalentitymapid = value;
    };
    /**
     * Gets the principalid property value. 
     * @returns a string
     */
    public get principalid() {
        return this._principalid;
    };
    /**
     * Sets the principalid property value. 
     * @param value Value to set for the principalid property.
     */
    public set principalid(value: string | undefined) {
        this._principalid = value;
    };
    /**
     * Gets the principalid_owner property value. 
     * @returns a principal
     */
    public get principalid_owner() {
        return this._principalid_owner;
    };
    /**
     * Sets the principalid_owner property value. 
     * @param value Value to set for the principalid_owner property.
     */
    public set principalid_owner(value: Principal | undefined) {
        this._principalid_owner = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeStringValue("principalentitymapid", this.principalentitymapid);
        writer.writeStringValue("principalid", this.principalid);
        writer.writeObjectValue<Principal>("principalid_owner", this.principalid_owner);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
