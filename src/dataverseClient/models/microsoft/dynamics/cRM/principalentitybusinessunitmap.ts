import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {Businessunit, Crmbaseentity, Principal} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Principalentitybusinessunitmap extends Crmbaseentity implements Parsable {
    private _businessunitid?: string | undefined;
    private _businessunitid_businessunit?: Businessunit | undefined;
    private _objecttypecode?: string | undefined;
    private _principalentitybusinessunitmapid?: string | undefined;
    private _principalid?: string | undefined;
    private _principalid_owner?: Principal | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the businessunitid property value. 
     * @returns a string
     */
    public get businessunitid() {
        return this._businessunitid;
    };
    /**
     * Sets the businessunitid property value. 
     * @param value Value to set for the businessunitid property.
     */
    public set businessunitid(value: string | undefined) {
        this._businessunitid = value;
    };
    /**
     * Gets the businessunitid_businessunit property value. 
     * @returns a businessunit
     */
    public get businessunitid_businessunit() {
        return this._businessunitid_businessunit;
    };
    /**
     * Sets the businessunitid_businessunit property value. 
     * @param value Value to set for the businessunitid_businessunit property.
     */
    public set businessunitid_businessunit(value: Businessunit | undefined) {
        this._businessunitid_businessunit = value;
    };
    /**
     * Instantiates a new principalentitybusinessunitmap and sets the default values.
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
            "businessunitid": (o, n) => { (o as unknown as Principalentitybusinessunitmap).businessunitid = n.getStringValue(); },
            "businessunitid_businessunit": (o, n) => { (o as unknown as Principalentitybusinessunitmap).businessunitid_businessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "objecttypecode": (o, n) => { (o as unknown as Principalentitybusinessunitmap).objecttypecode = n.getStringValue(); },
            "principalentitybusinessunitmapid": (o, n) => { (o as unknown as Principalentitybusinessunitmap).principalentitybusinessunitmapid = n.getStringValue(); },
            "principalid": (o, n) => { (o as unknown as Principalentitybusinessunitmap).principalid = n.getStringValue(); },
            "principalid_owner": (o, n) => { (o as unknown as Principalentitybusinessunitmap).principalid_owner = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Principalentitybusinessunitmap).versionnumber = n.getNumberValue(); },
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
     * Gets the principalentitybusinessunitmapid property value. 
     * @returns a string
     */
    public get principalentitybusinessunitmapid() {
        return this._principalentitybusinessunitmapid;
    };
    /**
     * Sets the principalentitybusinessunitmapid property value. 
     * @param value Value to set for the principalentitybusinessunitmapid property.
     */
    public set principalentitybusinessunitmapid(value: string | undefined) {
        this._principalentitybusinessunitmapid = value;
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
        writer.writeStringValue("businessunitid", this.businessunitid);
        writer.writeObjectValue<Businessunit>("businessunitid_businessunit", this.businessunitid_businessunit);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeStringValue("principalentitybusinessunitmapid", this.principalentitybusinessunitmapid);
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
