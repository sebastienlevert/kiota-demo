import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Campaignitem extends Crmbaseentity implements Parsable {
    private __campaignid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private _campaignitem_AsyncOperations?: Asyncoperation[] | undefined;
    private _campaignitem_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _campaignitem_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _campaignitem_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _campaignitemid?: string | undefined;
    private _entityid?: string | undefined;
    private _entitytype?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningbusinessunit?: string | undefined;
    private _owninguser?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _campaignid_value property value. 
     * @returns a string
     */
    public get _campaignid_value() {
        return this.__campaignid_value;
    };
    /**
     * Sets the _campaignid_value property value. 
     * @param value Value to set for the _campaignid_value property.
     */
    public set _campaignid_value(value: string | undefined) {
        this.__campaignid_value = value;
    };
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
     * Gets the campaignitem_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get campaignitem_AsyncOperations() {
        return this._campaignitem_AsyncOperations;
    };
    /**
     * Sets the campaignitem_AsyncOperations property value. 
     * @param value Value to set for the campaignitem_AsyncOperations property.
     */
    public set campaignitem_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._campaignitem_AsyncOperations = value;
    };
    /**
     * Gets the campaignitem_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get campaignitem_BulkDeleteFailures() {
        return this._campaignitem_BulkDeleteFailures;
    };
    /**
     * Sets the campaignitem_BulkDeleteFailures property value. 
     * @param value Value to set for the campaignitem_BulkDeleteFailures property.
     */
    public set campaignitem_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._campaignitem_BulkDeleteFailures = value;
    };
    /**
     * Gets the campaignitem_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get campaignitem_MailboxTrackingFolders() {
        return this._campaignitem_MailboxTrackingFolders;
    };
    /**
     * Sets the campaignitem_MailboxTrackingFolders property value. 
     * @param value Value to set for the campaignitem_MailboxTrackingFolders property.
     */
    public set campaignitem_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._campaignitem_MailboxTrackingFolders = value;
    };
    /**
     * Gets the campaignitem_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get campaignitem_PrincipalObjectAttributeAccesses() {
        return this._campaignitem_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the campaignitem_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the campaignitem_PrincipalObjectAttributeAccesses property.
     */
    public set campaignitem_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._campaignitem_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the campaignitemid property value. 
     * @returns a string
     */
    public get campaignitemid() {
        return this._campaignitemid;
    };
    /**
     * Sets the campaignitemid property value. 
     * @param value Value to set for the campaignitemid property.
     */
    public set campaignitemid(value: string | undefined) {
        this._campaignitemid = value;
    };
    /**
     * Instantiates a new campaignitem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the entityid property value. 
     * @returns a string
     */
    public get entityid() {
        return this._entityid;
    };
    /**
     * Sets the entityid property value. 
     * @param value Value to set for the entityid property.
     */
    public set entityid(value: string | undefined) {
        this._entityid = value;
    };
    /**
     * Gets the entitytype property value. 
     * @returns a string
     */
    public get entitytype() {
        return this._entitytype;
    };
    /**
     * Sets the entitytype property value. 
     * @param value Value to set for the entitytype property.
     */
    public set entitytype(value: string | undefined) {
        this._entitytype = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_campaignid_value": (o, n) => { (o as unknown as Campaignitem)._campaignid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Campaignitem)._ownerid_value = n.getStringValue(); },
            "campaignitem_AsyncOperations": (o, n) => { (o as unknown as Campaignitem).campaignitem_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "campaignitem_BulkDeleteFailures": (o, n) => { (o as unknown as Campaignitem).campaignitem_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "campaignitem_MailboxTrackingFolders": (o, n) => { (o as unknown as Campaignitem).campaignitem_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "campaignitem_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Campaignitem).campaignitem_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "campaignitemid": (o, n) => { (o as unknown as Campaignitem).campaignitemid = n.getStringValue(); },
            "entityid": (o, n) => { (o as unknown as Campaignitem).entityid = n.getStringValue(); },
            "entitytype": (o, n) => { (o as unknown as Campaignitem).entitytype = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Campaignitem).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Campaignitem).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Campaignitem).overriddencreatedon = n.getDateValue(); },
            "owningbusinessunit": (o, n) => { (o as unknown as Campaignitem).owningbusinessunit = n.getStringValue(); },
            "owninguser": (o, n) => { (o as unknown as Campaignitem).owninguser = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Campaignitem).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Campaignitem).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Campaignitem).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a string
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: string | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a string
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: string | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_campaignid_value", this._campaignid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeCollectionOfObjectValues<Asyncoperation>("campaignitem_AsyncOperations", this.campaignitem_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("campaignitem_BulkDeleteFailures", this.campaignitem_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("campaignitem_MailboxTrackingFolders", this.campaignitem_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("campaignitem_PrincipalObjectAttributeAccesses", this.campaignitem_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("campaignitemid", this.campaignitemid);
        writer.writeStringValue("entityid", this.entityid);
        writer.writeStringValue("entitytype", this.entitytype);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("owningbusinessunit", this.owningbusinessunit);
        writer.writeStringValue("owninguser", this.owninguser);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
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
