import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Businessunit, Crmbaseentity, Principal, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Exchangesyncidmapping extends Crmbaseentity implements Parsable {
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdon?: Date | undefined;
    private _exchangeentryid?: string | undefined;
    private _exchangesyncidmappingid?: string | undefined;
    private _fromcrmchangetype?: number | undefined;
    private _isdeletedinexchange?: boolean | undefined;
    private _isunlinkedincrm?: boolean | undefined;
    private _itemsubject?: string | undefined;
    private _lastsyncerror?: string | undefined;
    private _lastsyncerrorcode?: number | undefined;
    private _lastsyncerroroccurredon?: Date | undefined;
    private _modifiedon?: Date | undefined;
    private _objectid?: string | undefined;
    private _objecttypecode?: number | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _retries?: number | undefined;
    private _tocrmchangetype?: number | undefined;
    private _userdecision?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new exchangesyncidmapping and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the exchangeentryid property value. 
     * @returns a string
     */
    public get exchangeentryid() {
        return this._exchangeentryid;
    };
    /**
     * Sets the exchangeentryid property value. 
     * @param value Value to set for the exchangeentryid property.
     */
    public set exchangeentryid(value: string | undefined) {
        this._exchangeentryid = value;
    };
    /**
     * Gets the exchangesyncidmappingid property value. 
     * @returns a string
     */
    public get exchangesyncidmappingid() {
        return this._exchangesyncidmappingid;
    };
    /**
     * Sets the exchangesyncidmappingid property value. 
     * @param value Value to set for the exchangesyncidmappingid property.
     */
    public set exchangesyncidmappingid(value: string | undefined) {
        this._exchangesyncidmappingid = value;
    };
    /**
     * Gets the fromcrmchangetype property value. 
     * @returns a integer
     */
    public get fromcrmchangetype() {
        return this._fromcrmchangetype;
    };
    /**
     * Sets the fromcrmchangetype property value. 
     * @param value Value to set for the fromcrmchangetype property.
     */
    public set fromcrmchangetype(value: number | undefined) {
        this._fromcrmchangetype = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_ownerid_value": (o, n) => { (o as unknown as Exchangesyncidmapping)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Exchangesyncidmapping)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Exchangesyncidmapping)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Exchangesyncidmapping)._owninguser_value = n.getStringValue(); },
            "createdon": (o, n) => { (o as unknown as Exchangesyncidmapping).createdon = n.getDateValue(); },
            "exchangeentryid": (o, n) => { (o as unknown as Exchangesyncidmapping).exchangeentryid = n.getStringValue(); },
            "exchangesyncidmappingid": (o, n) => { (o as unknown as Exchangesyncidmapping).exchangesyncidmappingid = n.getStringValue(); },
            "fromcrmchangetype": (o, n) => { (o as unknown as Exchangesyncidmapping).fromcrmchangetype = n.getNumberValue(); },
            "isdeletedinexchange": (o, n) => { (o as unknown as Exchangesyncidmapping).isdeletedinexchange = n.getBooleanValue(); },
            "isunlinkedincrm": (o, n) => { (o as unknown as Exchangesyncidmapping).isunlinkedincrm = n.getBooleanValue(); },
            "itemsubject": (o, n) => { (o as unknown as Exchangesyncidmapping).itemsubject = n.getStringValue(); },
            "lastsyncerror": (o, n) => { (o as unknown as Exchangesyncidmapping).lastsyncerror = n.getStringValue(); },
            "lastsyncerrorcode": (o, n) => { (o as unknown as Exchangesyncidmapping).lastsyncerrorcode = n.getNumberValue(); },
            "lastsyncerroroccurredon": (o, n) => { (o as unknown as Exchangesyncidmapping).lastsyncerroroccurredon = n.getDateValue(); },
            "modifiedon": (o, n) => { (o as unknown as Exchangesyncidmapping).modifiedon = n.getDateValue(); },
            "objectid": (o, n) => { (o as unknown as Exchangesyncidmapping).objectid = n.getStringValue(); },
            "objecttypecode": (o, n) => { (o as unknown as Exchangesyncidmapping).objecttypecode = n.getNumberValue(); },
            "ownerid": (o, n) => { (o as unknown as Exchangesyncidmapping).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Exchangesyncidmapping).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Exchangesyncidmapping).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Exchangesyncidmapping).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "retries": (o, n) => { (o as unknown as Exchangesyncidmapping).retries = n.getNumberValue(); },
            "tocrmchangetype": (o, n) => { (o as unknown as Exchangesyncidmapping).tocrmchangetype = n.getNumberValue(); },
            "userdecision": (o, n) => { (o as unknown as Exchangesyncidmapping).userdecision = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Exchangesyncidmapping).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isdeletedinexchange property value. 
     * @returns a boolean
     */
    public get isdeletedinexchange() {
        return this._isdeletedinexchange;
    };
    /**
     * Sets the isdeletedinexchange property value. 
     * @param value Value to set for the isdeletedinexchange property.
     */
    public set isdeletedinexchange(value: boolean | undefined) {
        this._isdeletedinexchange = value;
    };
    /**
     * Gets the isunlinkedincrm property value. 
     * @returns a boolean
     */
    public get isunlinkedincrm() {
        return this._isunlinkedincrm;
    };
    /**
     * Sets the isunlinkedincrm property value. 
     * @param value Value to set for the isunlinkedincrm property.
     */
    public set isunlinkedincrm(value: boolean | undefined) {
        this._isunlinkedincrm = value;
    };
    /**
     * Gets the itemsubject property value. 
     * @returns a string
     */
    public get itemsubject() {
        return this._itemsubject;
    };
    /**
     * Sets the itemsubject property value. 
     * @param value Value to set for the itemsubject property.
     */
    public set itemsubject(value: string | undefined) {
        this._itemsubject = value;
    };
    /**
     * Gets the lastsyncerror property value. 
     * @returns a string
     */
    public get lastsyncerror() {
        return this._lastsyncerror;
    };
    /**
     * Sets the lastsyncerror property value. 
     * @param value Value to set for the lastsyncerror property.
     */
    public set lastsyncerror(value: string | undefined) {
        this._lastsyncerror = value;
    };
    /**
     * Gets the lastsyncerrorcode property value. 
     * @returns a integer
     */
    public get lastsyncerrorcode() {
        return this._lastsyncerrorcode;
    };
    /**
     * Sets the lastsyncerrorcode property value. 
     * @param value Value to set for the lastsyncerrorcode property.
     */
    public set lastsyncerrorcode(value: number | undefined) {
        this._lastsyncerrorcode = value;
    };
    /**
     * Gets the lastsyncerroroccurredon property value. 
     * @returns a Date
     */
    public get lastsyncerroroccurredon() {
        return this._lastsyncerroroccurredon;
    };
    /**
     * Sets the lastsyncerroroccurredon property value. 
     * @param value Value to set for the lastsyncerroroccurredon property.
     */
    public set lastsyncerroroccurredon(value: Date | undefined) {
        this._lastsyncerroroccurredon = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the objectid property value. 
     * @returns a string
     */
    public get objectid() {
        return this._objectid;
    };
    /**
     * Sets the objectid property value. 
     * @param value Value to set for the objectid property.
     */
    public set objectid(value: string | undefined) {
        this._objectid = value;
    };
    /**
     * Gets the objecttypecode property value. 
     * @returns a integer
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: number | undefined) {
        this._objecttypecode = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the retries property value. 
     * @returns a integer
     */
    public get retries() {
        return this._retries;
    };
    /**
     * Sets the retries property value. 
     * @param value Value to set for the retries property.
     */
    public set retries(value: number | undefined) {
        this._retries = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeStringValue("exchangeentryid", this.exchangeentryid);
        writer.writeStringValue("exchangesyncidmappingid", this.exchangesyncidmappingid);
        writer.writeNumberValue("fromcrmchangetype", this.fromcrmchangetype);
        writer.writeBooleanValue("isdeletedinexchange", this.isdeletedinexchange);
        writer.writeBooleanValue("isunlinkedincrm", this.isunlinkedincrm);
        writer.writeStringValue("itemsubject", this.itemsubject);
        writer.writeStringValue("lastsyncerror", this.lastsyncerror);
        writer.writeNumberValue("lastsyncerrorcode", this.lastsyncerrorcode);
        writer.writeDateValue("lastsyncerroroccurredon", this.lastsyncerroroccurredon);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeStringValue("objectid", this.objectid);
        writer.writeNumberValue("objecttypecode", this.objecttypecode);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("retries", this.retries);
        writer.writeNumberValue("tocrmchangetype", this.tocrmchangetype);
        writer.writeNumberValue("userdecision", this.userdecision);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the tocrmchangetype property value. 
     * @returns a integer
     */
    public get tocrmchangetype() {
        return this._tocrmchangetype;
    };
    /**
     * Sets the tocrmchangetype property value. 
     * @param value Value to set for the tocrmchangetype property.
     */
    public set tocrmchangetype(value: number | undefined) {
        this._tocrmchangetype = value;
    };
    /**
     * Gets the userdecision property value. 
     * @returns a integer
     */
    public get userdecision() {
        return this._userdecision;
    };
    /**
     * Sets the userdecision property value. 
     * @param value Value to set for the userdecision property.
     */
    public set userdecision(value: number | undefined) {
        this._userdecision = value;
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
