import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Competitorsalesliterature extends Crmbaseentity implements Parsable {
    private _competitorid?: string | undefined;
    private _competitorsalesliterature_AsyncOperations?: Asyncoperation[] | undefined;
    private _competitorsalesliterature_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _competitorsalesliterature_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _competitorsalesliterature_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _competitorsalesliteratureid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _salesliteratureid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the competitorid property value. 
     * @returns a string
     */
    public get competitorid() {
        return this._competitorid;
    };
    /**
     * Sets the competitorid property value. 
     * @param value Value to set for the competitorid property.
     */
    public set competitorid(value: string | undefined) {
        this._competitorid = value;
    };
    /**
     * Gets the competitorsalesliterature_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get competitorsalesliterature_AsyncOperations() {
        return this._competitorsalesliterature_AsyncOperations;
    };
    /**
     * Sets the competitorsalesliterature_AsyncOperations property value. 
     * @param value Value to set for the competitorsalesliterature_AsyncOperations property.
     */
    public set competitorsalesliterature_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._competitorsalesliterature_AsyncOperations = value;
    };
    /**
     * Gets the competitorsalesliterature_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get competitorsalesliterature_BulkDeleteFailures() {
        return this._competitorsalesliterature_BulkDeleteFailures;
    };
    /**
     * Sets the competitorsalesliterature_BulkDeleteFailures property value. 
     * @param value Value to set for the competitorsalesliterature_BulkDeleteFailures property.
     */
    public set competitorsalesliterature_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._competitorsalesliterature_BulkDeleteFailures = value;
    };
    /**
     * Gets the competitorsalesliterature_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get competitorsalesliterature_MailboxTrackingFolders() {
        return this._competitorsalesliterature_MailboxTrackingFolders;
    };
    /**
     * Sets the competitorsalesliterature_MailboxTrackingFolders property value. 
     * @param value Value to set for the competitorsalesliterature_MailboxTrackingFolders property.
     */
    public set competitorsalesliterature_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._competitorsalesliterature_MailboxTrackingFolders = value;
    };
    /**
     * Gets the competitorsalesliterature_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get competitorsalesliterature_PrincipalObjectAttributeAccesses() {
        return this._competitorsalesliterature_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the competitorsalesliterature_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the competitorsalesliterature_PrincipalObjectAttributeAccesses property.
     */
    public set competitorsalesliterature_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._competitorsalesliterature_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the competitorsalesliteratureid property value. 
     * @returns a string
     */
    public get competitorsalesliteratureid() {
        return this._competitorsalesliteratureid;
    };
    /**
     * Sets the competitorsalesliteratureid property value. 
     * @param value Value to set for the competitorsalesliteratureid property.
     */
    public set competitorsalesliteratureid(value: string | undefined) {
        this._competitorsalesliteratureid = value;
    };
    /**
     * Instantiates a new competitorsalesliterature and sets the default values.
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
            "competitorid": (o, n) => { (o as unknown as Competitorsalesliterature).competitorid = n.getStringValue(); },
            "competitorsalesliterature_AsyncOperations": (o, n) => { (o as unknown as Competitorsalesliterature).competitorsalesliterature_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "competitorsalesliterature_BulkDeleteFailures": (o, n) => { (o as unknown as Competitorsalesliterature).competitorsalesliterature_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "competitorsalesliterature_MailboxTrackingFolders": (o, n) => { (o as unknown as Competitorsalesliterature).competitorsalesliterature_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "competitorsalesliterature_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Competitorsalesliterature).competitorsalesliterature_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "competitorsalesliteratureid": (o, n) => { (o as unknown as Competitorsalesliterature).competitorsalesliteratureid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Competitorsalesliterature).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Competitorsalesliterature).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Competitorsalesliterature).overriddencreatedon = n.getDateValue(); },
            "salesliteratureid": (o, n) => { (o as unknown as Competitorsalesliterature).salesliteratureid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Competitorsalesliterature).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Competitorsalesliterature).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Competitorsalesliterature).versionnumber = n.getNumberValue(); },
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
     * Gets the salesliteratureid property value. 
     * @returns a string
     */
    public get salesliteratureid() {
        return this._salesliteratureid;
    };
    /**
     * Sets the salesliteratureid property value. 
     * @param value Value to set for the salesliteratureid property.
     */
    public set salesliteratureid(value: string | undefined) {
        this._salesliteratureid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("competitorid", this.competitorid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("competitorsalesliterature_AsyncOperations", this.competitorsalesliterature_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("competitorsalesliterature_BulkDeleteFailures", this.competitorsalesliterature_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("competitorsalesliterature_MailboxTrackingFolders", this.competitorsalesliterature_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("competitorsalesliterature_PrincipalObjectAttributeAccesses", this.competitorsalesliterature_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("competitorsalesliteratureid", this.competitorsalesliteratureid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("salesliteratureid", this.salesliteratureid);
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
