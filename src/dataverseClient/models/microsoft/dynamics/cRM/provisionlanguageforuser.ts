import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Syncerror} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Provisionlanguageforuser extends Crmbaseentity implements Parsable {
    private _asyncoperationid?: string | undefined;
    private _lcid?: number | undefined;
    private _name?: string | undefined;
    private _operationstatus?: number | undefined;
    private _organizationid?: string | undefined;
    private _provisionlanguageforuser_AsyncOperations?: Asyncoperation[] | undefined;
    private _provisionlanguageforuser_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _provisionlanguageforuser_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _provisionlanguageforuser_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _provisionlanguageforuser_ProcessSession?: Processsession[] | undefined;
    private _provisionlanguageforuser_SyncErrors?: Syncerror[] | undefined;
    private _provisionlanguageforuserid?: string | undefined;
    private _userid?: string | undefined;
    /**
     * Gets the asyncoperationid property value. 
     * @returns a string
     */
    public get asyncoperationid() {
        return this._asyncoperationid;
    };
    /**
     * Sets the asyncoperationid property value. 
     * @param value Value to set for the asyncoperationid property.
     */
    public set asyncoperationid(value: string | undefined) {
        this._asyncoperationid = value;
    };
    /**
     * Instantiates a new provisionlanguageforuser and sets the default values.
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
            "asyncoperationid": (o, n) => { (o as unknown as Provisionlanguageforuser).asyncoperationid = n.getStringValue(); },
            "lcid": (o, n) => { (o as unknown as Provisionlanguageforuser).lcid = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Provisionlanguageforuser).name = n.getStringValue(); },
            "operationstatus": (o, n) => { (o as unknown as Provisionlanguageforuser).operationstatus = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Provisionlanguageforuser).organizationid = n.getStringValue(); },
            "provisionlanguageforuser_AsyncOperations": (o, n) => { (o as unknown as Provisionlanguageforuser).provisionlanguageforuser_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "provisionlanguageforuser_BulkDeleteFailures": (o, n) => { (o as unknown as Provisionlanguageforuser).provisionlanguageforuser_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "provisionlanguageforuser_MailboxTrackingFolders": (o, n) => { (o as unknown as Provisionlanguageforuser).provisionlanguageforuser_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "provisionlanguageforuser_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Provisionlanguageforuser).provisionlanguageforuser_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "provisionlanguageforuser_ProcessSession": (o, n) => { (o as unknown as Provisionlanguageforuser).provisionlanguageforuser_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "provisionlanguageforuser_SyncErrors": (o, n) => { (o as unknown as Provisionlanguageforuser).provisionlanguageforuser_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "provisionlanguageforuserid": (o, n) => { (o as unknown as Provisionlanguageforuser).provisionlanguageforuserid = n.getStringValue(); },
            "userid": (o, n) => { (o as unknown as Provisionlanguageforuser).userid = n.getStringValue(); },
        };
    };
    /**
     * Gets the lcid property value. 
     * @returns a integer
     */
    public get lcid() {
        return this._lcid;
    };
    /**
     * Sets the lcid property value. 
     * @param value Value to set for the lcid property.
     */
    public set lcid(value: number | undefined) {
        this._lcid = value;
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
     * Gets the operationstatus property value. 
     * @returns a integer
     */
    public get operationstatus() {
        return this._operationstatus;
    };
    /**
     * Sets the operationstatus property value. 
     * @param value Value to set for the operationstatus property.
     */
    public set operationstatus(value: number | undefined) {
        this._operationstatus = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a string
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: string | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the provisionlanguageforuser_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get provisionlanguageforuser_AsyncOperations() {
        return this._provisionlanguageforuser_AsyncOperations;
    };
    /**
     * Sets the provisionlanguageforuser_AsyncOperations property value. 
     * @param value Value to set for the provisionlanguageforuser_AsyncOperations property.
     */
    public set provisionlanguageforuser_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._provisionlanguageforuser_AsyncOperations = value;
    };
    /**
     * Gets the provisionlanguageforuser_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get provisionlanguageforuser_BulkDeleteFailures() {
        return this._provisionlanguageforuser_BulkDeleteFailures;
    };
    /**
     * Sets the provisionlanguageforuser_BulkDeleteFailures property value. 
     * @param value Value to set for the provisionlanguageforuser_BulkDeleteFailures property.
     */
    public set provisionlanguageforuser_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._provisionlanguageforuser_BulkDeleteFailures = value;
    };
    /**
     * Gets the provisionlanguageforuser_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get provisionlanguageforuser_MailboxTrackingFolders() {
        return this._provisionlanguageforuser_MailboxTrackingFolders;
    };
    /**
     * Sets the provisionlanguageforuser_MailboxTrackingFolders property value. 
     * @param value Value to set for the provisionlanguageforuser_MailboxTrackingFolders property.
     */
    public set provisionlanguageforuser_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._provisionlanguageforuser_MailboxTrackingFolders = value;
    };
    /**
     * Gets the provisionlanguageforuser_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get provisionlanguageforuser_PrincipalObjectAttributeAccesses() {
        return this._provisionlanguageforuser_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the provisionlanguageforuser_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the provisionlanguageforuser_PrincipalObjectAttributeAccesses property.
     */
    public set provisionlanguageforuser_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._provisionlanguageforuser_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the provisionlanguageforuser_ProcessSession property value. 
     * @returns a processsession
     */
    public get provisionlanguageforuser_ProcessSession() {
        return this._provisionlanguageforuser_ProcessSession;
    };
    /**
     * Sets the provisionlanguageforuser_ProcessSession property value. 
     * @param value Value to set for the provisionlanguageforuser_ProcessSession property.
     */
    public set provisionlanguageforuser_ProcessSession(value: Processsession[] | undefined) {
        this._provisionlanguageforuser_ProcessSession = value;
    };
    /**
     * Gets the provisionlanguageforuser_SyncErrors property value. 
     * @returns a syncerror
     */
    public get provisionlanguageforuser_SyncErrors() {
        return this._provisionlanguageforuser_SyncErrors;
    };
    /**
     * Sets the provisionlanguageforuser_SyncErrors property value. 
     * @param value Value to set for the provisionlanguageforuser_SyncErrors property.
     */
    public set provisionlanguageforuser_SyncErrors(value: Syncerror[] | undefined) {
        this._provisionlanguageforuser_SyncErrors = value;
    };
    /**
     * Gets the provisionlanguageforuserid property value. 
     * @returns a string
     */
    public get provisionlanguageforuserid() {
        return this._provisionlanguageforuserid;
    };
    /**
     * Sets the provisionlanguageforuserid property value. 
     * @param value Value to set for the provisionlanguageforuserid property.
     */
    public set provisionlanguageforuserid(value: string | undefined) {
        this._provisionlanguageforuserid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("asyncoperationid", this.asyncoperationid);
        writer.writeNumberValue("lcid", this.lcid);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("operationstatus", this.operationstatus);
        writer.writeStringValue("organizationid", this.organizationid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("provisionlanguageforuser_AsyncOperations", this.provisionlanguageforuser_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("provisionlanguageforuser_BulkDeleteFailures", this.provisionlanguageforuser_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("provisionlanguageforuser_MailboxTrackingFolders", this.provisionlanguageforuser_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("provisionlanguageforuser_PrincipalObjectAttributeAccesses", this.provisionlanguageforuser_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("provisionlanguageforuser_ProcessSession", this.provisionlanguageforuser_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("provisionlanguageforuser_SyncErrors", this.provisionlanguageforuser_SyncErrors);
        writer.writeStringValue("provisionlanguageforuserid", this.provisionlanguageforuserid);
        writer.writeStringValue("userid", this.userid);
    };
    /**
     * Gets the userid property value. 
     * @returns a string
     */
    public get userid() {
        return this._userid;
    };
    /**
     * Sets the userid property value. 
     * @param value Value to set for the userid property.
     */
    public set userid(value: string | undefined) {
        this._userid = value;
    };
}
