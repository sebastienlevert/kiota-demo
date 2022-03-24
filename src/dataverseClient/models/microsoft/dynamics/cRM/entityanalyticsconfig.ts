import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Entity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Syncerror} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entityanalyticsconfig extends Crmbaseentity implements Parsable {
    private __organizationid_value?: string | undefined;
    private __parententityid_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdon?: Date | undefined;
    private _entityanalyticsconfig_AsyncOperations?: Asyncoperation[] | undefined;
    private _entityanalyticsconfig_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _entityanalyticsconfig_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _entityanalyticsconfig_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _entityanalyticsconfig_SyncErrors?: Syncerror[] | undefined;
    private _entityanalyticsconfigid?: string | undefined;
    private _isenabledforadls?: boolean | undefined;
    private _isenabledfortimeseries?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedon?: Date | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _parententityid?: Entity | undefined;
    private _parententitylogicalname?: string | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the _parententityid_value property value. 
     * @returns a string
     */
    public get _parententityid_value() {
        return this.__parententityid_value;
    };
    /**
     * Sets the _parententityid_value property value. 
     * @param value Value to set for the _parententityid_value property.
     */
    public set _parententityid_value(value: string | undefined) {
        this.__parententityid_value = value;
    };
    /**
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new entityanalyticsconfig and sets the default values.
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
     * Gets the entityanalyticsconfig_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get entityanalyticsconfig_AsyncOperations() {
        return this._entityanalyticsconfig_AsyncOperations;
    };
    /**
     * Sets the entityanalyticsconfig_AsyncOperations property value. 
     * @param value Value to set for the entityanalyticsconfig_AsyncOperations property.
     */
    public set entityanalyticsconfig_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._entityanalyticsconfig_AsyncOperations = value;
    };
    /**
     * Gets the entityanalyticsconfig_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get entityanalyticsconfig_BulkDeleteFailures() {
        return this._entityanalyticsconfig_BulkDeleteFailures;
    };
    /**
     * Sets the entityanalyticsconfig_BulkDeleteFailures property value. 
     * @param value Value to set for the entityanalyticsconfig_BulkDeleteFailures property.
     */
    public set entityanalyticsconfig_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._entityanalyticsconfig_BulkDeleteFailures = value;
    };
    /**
     * Gets the entityanalyticsconfig_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get entityanalyticsconfig_MailboxTrackingFolders() {
        return this._entityanalyticsconfig_MailboxTrackingFolders;
    };
    /**
     * Sets the entityanalyticsconfig_MailboxTrackingFolders property value. 
     * @param value Value to set for the entityanalyticsconfig_MailboxTrackingFolders property.
     */
    public set entityanalyticsconfig_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._entityanalyticsconfig_MailboxTrackingFolders = value;
    };
    /**
     * Gets the entityanalyticsconfig_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get entityanalyticsconfig_PrincipalObjectAttributeAccesses() {
        return this._entityanalyticsconfig_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the entityanalyticsconfig_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the entityanalyticsconfig_PrincipalObjectAttributeAccesses property.
     */
    public set entityanalyticsconfig_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._entityanalyticsconfig_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the entityanalyticsconfig_SyncErrors property value. 
     * @returns a syncerror
     */
    public get entityanalyticsconfig_SyncErrors() {
        return this._entityanalyticsconfig_SyncErrors;
    };
    /**
     * Sets the entityanalyticsconfig_SyncErrors property value. 
     * @param value Value to set for the entityanalyticsconfig_SyncErrors property.
     */
    public set entityanalyticsconfig_SyncErrors(value: Syncerror[] | undefined) {
        this._entityanalyticsconfig_SyncErrors = value;
    };
    /**
     * Gets the entityanalyticsconfigid property value. 
     * @returns a string
     */
    public get entityanalyticsconfigid() {
        return this._entityanalyticsconfigid;
    };
    /**
     * Sets the entityanalyticsconfigid property value. 
     * @param value Value to set for the entityanalyticsconfigid property.
     */
    public set entityanalyticsconfigid(value: string | undefined) {
        this._entityanalyticsconfigid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_organizationid_value": (o, n) => { (o as unknown as Entityanalyticsconfig)._organizationid_value = n.getStringValue(); },
            "_parententityid_value": (o, n) => { (o as unknown as Entityanalyticsconfig)._parententityid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Entityanalyticsconfig).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Entityanalyticsconfig).componentstate = n.getNumberValue(); },
            "createdon": (o, n) => { (o as unknown as Entityanalyticsconfig).createdon = n.getDateValue(); },
            "entityanalyticsconfig_AsyncOperations": (o, n) => { (o as unknown as Entityanalyticsconfig).entityanalyticsconfig_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "entityanalyticsconfig_BulkDeleteFailures": (o, n) => { (o as unknown as Entityanalyticsconfig).entityanalyticsconfig_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "entityanalyticsconfig_MailboxTrackingFolders": (o, n) => { (o as unknown as Entityanalyticsconfig).entityanalyticsconfig_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "entityanalyticsconfig_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Entityanalyticsconfig).entityanalyticsconfig_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "entityanalyticsconfig_SyncErrors": (o, n) => { (o as unknown as Entityanalyticsconfig).entityanalyticsconfig_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "entityanalyticsconfigid": (o, n) => { (o as unknown as Entityanalyticsconfig).entityanalyticsconfigid = n.getStringValue(); },
            "isenabledforadls": (o, n) => { (o as unknown as Entityanalyticsconfig).isenabledforadls = n.getBooleanValue(); },
            "isenabledfortimeseries": (o, n) => { (o as unknown as Entityanalyticsconfig).isenabledfortimeseries = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Entityanalyticsconfig).ismanaged = n.getBooleanValue(); },
            "modifiedon": (o, n) => { (o as unknown as Entityanalyticsconfig).modifiedon = n.getDateValue(); },
            "organizationid": (o, n) => { (o as unknown as Entityanalyticsconfig).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Entityanalyticsconfig).overwritetime = n.getDateValue(); },
            "parententityid": (o, n) => { (o as unknown as Entityanalyticsconfig).parententityid = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "parententitylogicalname": (o, n) => { (o as unknown as Entityanalyticsconfig).parententitylogicalname = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Entityanalyticsconfig).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entityanalyticsconfig).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isenabledforadls property value. 
     * @returns a boolean
     */
    public get isenabledforadls() {
        return this._isenabledforadls;
    };
    /**
     * Sets the isenabledforadls property value. 
     * @param value Value to set for the isenabledforadls property.
     */
    public set isenabledforadls(value: boolean | undefined) {
        this._isenabledforadls = value;
    };
    /**
     * Gets the isenabledfortimeseries property value. 
     * @returns a boolean
     */
    public get isenabledfortimeseries() {
        return this._isenabledfortimeseries;
    };
    /**
     * Sets the isenabledfortimeseries property value. 
     * @param value Value to set for the isenabledfortimeseries property.
     */
    public set isenabledfortimeseries(value: boolean | undefined) {
        this._isenabledfortimeseries = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the parententityid property value. 
     * @returns a entity
     */
    public get parententityid() {
        return this._parententityid;
    };
    /**
     * Sets the parententityid property value. 
     * @param value Value to set for the parententityid property.
     */
    public set parententityid(value: Entity | undefined) {
        this._parententityid = value;
    };
    /**
     * Gets the parententitylogicalname property value. 
     * @returns a string
     */
    public get parententitylogicalname() {
        return this._parententitylogicalname;
    };
    /**
     * Sets the parententitylogicalname property value. 
     * @param value Value to set for the parententitylogicalname property.
     */
    public set parententitylogicalname(value: string | undefined) {
        this._parententitylogicalname = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_parententityid_value", this._parententityid_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeCollectionOfObjectValues<Asyncoperation>("entityanalyticsconfig_AsyncOperations", this.entityanalyticsconfig_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("entityanalyticsconfig_BulkDeleteFailures", this.entityanalyticsconfig_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("entityanalyticsconfig_MailboxTrackingFolders", this.entityanalyticsconfig_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("entityanalyticsconfig_PrincipalObjectAttributeAccesses", this.entityanalyticsconfig_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("entityanalyticsconfig_SyncErrors", this.entityanalyticsconfig_SyncErrors);
        writer.writeStringValue("entityanalyticsconfigid", this.entityanalyticsconfigid);
        writer.writeBooleanValue("isenabledforadls", this.isenabledforadls);
        writer.writeBooleanValue("isenabledfortimeseries", this.isenabledfortimeseries);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Entity>("parententityid", this.parententityid);
        writer.writeStringValue("parententitylogicalname", this.parententitylogicalname);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
