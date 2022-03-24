import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Productsalesliterature extends Crmbaseentity implements Parsable {
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _productid?: string | undefined;
    private _productsalesliterature_AsyncOperations?: Asyncoperation[] | undefined;
    private _productsalesliterature_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _productsalesliterature_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _productsalesliterature_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _productsalesliteratureid?: string | undefined;
    private _salesliteratureid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new productsalesliterature and sets the default values.
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
            "importsequencenumber": (o, n) => { (o as unknown as Productsalesliterature).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Productsalesliterature).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Productsalesliterature).overriddencreatedon = n.getDateValue(); },
            "productid": (o, n) => { (o as unknown as Productsalesliterature).productid = n.getStringValue(); },
            "productsalesliterature_AsyncOperations": (o, n) => { (o as unknown as Productsalesliterature).productsalesliterature_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "productsalesliterature_BulkDeleteFailures": (o, n) => { (o as unknown as Productsalesliterature).productsalesliterature_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "productsalesliterature_MailboxTrackingFolders": (o, n) => { (o as unknown as Productsalesliterature).productsalesliterature_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "productsalesliterature_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Productsalesliterature).productsalesliterature_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "productsalesliteratureid": (o, n) => { (o as unknown as Productsalesliterature).productsalesliteratureid = n.getStringValue(); },
            "salesliteratureid": (o, n) => { (o as unknown as Productsalesliterature).salesliteratureid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Productsalesliterature).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Productsalesliterature).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Productsalesliterature).versionnumber = n.getNumberValue(); },
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
     * Gets the productid property value. 
     * @returns a string
     */
    public get productid() {
        return this._productid;
    };
    /**
     * Sets the productid property value. 
     * @param value Value to set for the productid property.
     */
    public set productid(value: string | undefined) {
        this._productid = value;
    };
    /**
     * Gets the productsalesliterature_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get productsalesliterature_AsyncOperations() {
        return this._productsalesliterature_AsyncOperations;
    };
    /**
     * Sets the productsalesliterature_AsyncOperations property value. 
     * @param value Value to set for the productsalesliterature_AsyncOperations property.
     */
    public set productsalesliterature_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._productsalesliterature_AsyncOperations = value;
    };
    /**
     * Gets the productsalesliterature_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get productsalesliterature_BulkDeleteFailures() {
        return this._productsalesliterature_BulkDeleteFailures;
    };
    /**
     * Sets the productsalesliterature_BulkDeleteFailures property value. 
     * @param value Value to set for the productsalesliterature_BulkDeleteFailures property.
     */
    public set productsalesliterature_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._productsalesliterature_BulkDeleteFailures = value;
    };
    /**
     * Gets the productsalesliterature_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get productsalesliterature_MailboxTrackingFolders() {
        return this._productsalesliterature_MailboxTrackingFolders;
    };
    /**
     * Sets the productsalesliterature_MailboxTrackingFolders property value. 
     * @param value Value to set for the productsalesliterature_MailboxTrackingFolders property.
     */
    public set productsalesliterature_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._productsalesliterature_MailboxTrackingFolders = value;
    };
    /**
     * Gets the productsalesliterature_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get productsalesliterature_PrincipalObjectAttributeAccesses() {
        return this._productsalesliterature_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the productsalesliterature_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the productsalesliterature_PrincipalObjectAttributeAccesses property.
     */
    public set productsalesliterature_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._productsalesliterature_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the productsalesliteratureid property value. 
     * @returns a string
     */
    public get productsalesliteratureid() {
        return this._productsalesliteratureid;
    };
    /**
     * Sets the productsalesliteratureid property value. 
     * @param value Value to set for the productsalesliteratureid property.
     */
    public set productsalesliteratureid(value: string | undefined) {
        this._productsalesliteratureid = value;
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
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("productid", this.productid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("productsalesliterature_AsyncOperations", this.productsalesliterature_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("productsalesliterature_BulkDeleteFailures", this.productsalesliterature_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("productsalesliterature_MailboxTrackingFolders", this.productsalesliterature_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("productsalesliterature_PrincipalObjectAttributeAccesses", this.productsalesliterature_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("productsalesliteratureid", this.productsalesliteratureid);
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
